import {GetServerSideProps, GetServerSidePropsContext} from 'next';

export default function withGetServerSideProps(getServerSideProps: GetServerSideProps): GetServerSideProps {
  return async (context: GetServerSidePropsContext) => {
    try {
      // getServerSideProps를 평소대로 실행
      // await 를 꼭 붙여서 try catch에서 에러가 잡히도록
      return await getServerSideProps(context);
    } catch (error) {
      // // apiError라면
      // if ('code' in error) {
      // const {redirectUrl, notFound} = error;
      // // 404로 보내거나
      // if (notFound) {
      //   return {
      //     notFound: true,
      //   };
      // }
      // 원하는 페이지로 보낸다.
      // https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering 참고

      console.log('error : ', error);
      return {
        redirect: {
          // destination: redirectUrl,
          destination: '/',
          permanent: false,
        },
      };
    }

    // console.error('unhandled error', error);

    // throw error;
  };
}
