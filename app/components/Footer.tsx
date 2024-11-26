import React from 'react';
export function Footer() {
  return (
    <footer>
      {' '}
      <div>
        {' '}
        <p>© {new Date().getFullYear()} Mi Tienda</p>{' '}
        <nav>
          {' '}
          <a href="/">Inicio</a> | <a href="/productos">Productos</a> |{' '}
          <a href="/contacto">Contacto</a>{' '}
        </nav>{' '}
      </div>{' '}
    </footer>
  );
}
