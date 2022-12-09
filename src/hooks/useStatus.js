export function useStatus(status) {
  let ruStatus;
  switch (status) {
    case 'done':
      ruStatus = 'Выполнен';
      break;
    case 'pending':
      ruStatus = 'Готовится';
      break;
    case 'created':
      ruStatus = 'Создан';
      break;
  }
  return ruStatus;
}