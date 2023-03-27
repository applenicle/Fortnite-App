import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={4}
    width={250}
    height={450}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="25" rx="0" ry="0" width="250" height="240" />
    <rect x="0" y="280" rx="0" ry="0" width="250" height="70" />
  </ContentLoader>
);

export default Skeleton;

// const Loader: FC = () => {
//     return <>
//         <div className="center pt-10">
//             <div className="ring" />
//         </div>

//         <style jsx>
//             { `
//               .center {
//                 display: flex;
//                 justify-content: left;
//                 align-items: center;
//               }
//               .ring {
//                 width: 80px;
//                 height: 80px;
//                 border-radius: 50%;
//                 animation: ring 2s linear infinite;
//               }
//               @keyframes ring {
//                 0% {
//                   transform: rotate(0deg);
//                   box-shadow: 1px 2px 5px #D30CE4;
//                 }
//                 50% {
//                   transform: rotate(180deg);
//                   box-shadow: 1px 2px 5px #FFF;
//                 }
//                 100% {
//                   transform: rotate(360deg);
//                 box-shadow: 1px 2px 5px #D30CE4;
//                 }
//               }
//               .ring::before {
//                 position: absolute;
//                 content: '';
//                 left: 0;
//                 top: 0;
//                 height: 100%;
//                 width: 100%;
//                 border-radius: 50%;
//                 box-shadow: 0 0 5px rgba(255,255,255,.5);
//               }
//           ` }
//         </style>
//     </>;
// };

// export default Loader;
