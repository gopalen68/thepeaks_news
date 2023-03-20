export { };

declare global {
  interface NewsProps {
    id: string;
    title: string;
    url?: string;
    subtitle?: string;
  }
}