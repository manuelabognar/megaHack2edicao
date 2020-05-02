export function signInSolicitante() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'uasoiduaid89sadj38jdaisdu83a',
        user: {
          name: 'Abed Nadir',
          email: 'solicitante@teste.com',
          password: '42',
        },
      });
    }, 500);
  });
}

export function signInCartorio() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'kaopsdi90w3d83dj89qjd3938jd',
        user: {
          name: 'Xº Registro de imóveis',
          email: 'cartorio@teste.com',
          password: 'oi',
        },
      });
    }, 500);
  });
}