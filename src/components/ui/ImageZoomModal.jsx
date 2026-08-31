import { useEffect, useRef, useState } from 'react';
import './ImageZoomModal.css';

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.4;

function ImageZoomModal({ src, alt, onClose }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragState = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  function clampScale(next) {
    return Math.min(MAX_SCALE, Math.max(MIN_SCALE, next));
  }

  function handleWheel(event) {
    event.preventDefault();
    const next = clampScale(scale - event.deltaY * 0.01 * ZOOM_STEP);
    setScale(next);
    if (next === MIN_SCALE) setPosition({ x: 0, y: 0 });
  }

  function handleDoubleClick() {
    if (scale > MIN_SCALE) {
      setScale(MIN_SCALE);
      setPosition({ x: 0, y: 0 });
    } else {
      setScale(2.5);
    }
  }

  function handlePointerDown(event) {
    if (scale === MIN_SCALE) return;
    dragState.current = {
      startX: event.clientX - position.x,
      startY: event.clientY - position.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    if (!dragState.current) return;
    setPosition({
      x: event.clientX - dragState.current.startX,
      y: event.clientY - dragState.current.startY,
    });
  }

  function handlePointerUp() {
    dragState.current = null;
  }

  return (
    <div className="image-zoom-modal" onClick={onClose}>
      <button
        type="button"
        className="image-zoom-modal__close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <div
        className="image-zoom-modal__viewport"
        onClick={(event) => event.stopPropagation()}
        onWheel={handleWheel}
        onDoubleClick={handleDoubleClick}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <img
          src={src}
          alt={alt}
          className="image-zoom-modal__image"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            cursor: scale > MIN_SCALE ? 'grab' : 'zoom-in',
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}

export default ImageZoomModal;
