

export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'uasoiduaid89sadj38jdaisdu83a',
        user: {
          name: 'Abed Nadir',
          email: 'teste@teste.com',
          password: '42',
        },
      });
    }, 500);
  });
}