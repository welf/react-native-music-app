export const tracksFilter =
  (searchInput: string) =>
  ({ title }: { title: string }) =>
    title.toLowerCase().includes(searchInput.toLowerCase()) || false;
