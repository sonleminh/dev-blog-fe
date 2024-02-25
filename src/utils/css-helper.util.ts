export const truncateTextByLine = (line: any) => ({
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: line,
});
