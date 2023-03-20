import "../styles/globals.css";

import type { AppProps } from "next/app";

import Layout from "@/components/Layout";
// import Loading from "./loading";
// import Loader from "@/components/Loader";

// function Loadering() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     const handleStart = (url) => (url !== router.asPath) && setLoading(true);
//     // const handleComplete = (url) => (url === router.asPath) && setLoading(false);
//     const handleComplete = (url) => (url === router.asPath) && setTimeout(() => { setLoading(false) }, 3000);

//     router.events.on('routeChangeStart', handleStart);
//     router.events.on('routeChangeComplete', handleComplete);
//     router.events.on('routeChangeError', handleComplete);

//     return () => {
//       router.events.off('routeChangeStart', handleStart);
//       router.events.off('routeChangeComplete', handleComplete);
//       router.events.off('routeChangeError', handleComplete);
//     }
//   })
//   return loading && (
//     <Loader />
//   )
// }

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* <Loadering /> */}
      <Component {...pageProps} />
    </Layout>
  );
}
