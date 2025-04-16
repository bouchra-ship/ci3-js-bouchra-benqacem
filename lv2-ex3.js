function NombrePremier(nombre) {
  if (nombre <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(nombre); i++) {
    if (nombre % i === 0) {
      return false;
    }
  }
  return true;
}
