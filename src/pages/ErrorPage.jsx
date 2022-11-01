import { motion } from "framer-motion";
import { Blob } from "../components";
import { ourStoryPaths } from "../data/paths";

const ErrorPage = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 8,
        },
        opacity: { duration: 3 },
      },
    },
  };
  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "50vh",
        padding: "1rem",
        position: "relative",
      }}
    >
      <svg
        viewBox="0 0 974 368"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: "auto",
          maxHeight: "100%",
          width: "80%",
        }}
      >
        <motion.path
          variants={draw}
          initial="hidden"
          animate="visible"
          d="M254.91 315.787L254.912 315.783C266.642 298.691 272.5 278.757 272.5 256C272.5 229.247 265.643 206.803 251.901 188.702C238.478 170.247 214.529 155.538 180.153 144.524C145.847 133.533 98.2885 126.869 37.5 124.519V28.5H213.105L227.514 89.1156L227.605 89.5H228H237.5H238V89V1V0.5H237.5H12H11.5V1V138.5V138.997L11.9974 139C77.2983 139.333 130.233 147.163 170.824 162.468C191.081 170.106 206.24 181.3 216.338 196.033C226.436 210.766 231.5 229.078 231.5 251C231.5 271.271 227.679 288.688 220.057 303.268C212.432 317.855 201.831 329.116 188.251 337.067C174.668 344.685 159.255 348.5 142 348.5C123.762 348.5 107.023 343.694 91.7716 334.08C76.8638 324.14 64.9209 309.552 55.9537 290.29C46.9913 270.704 42.5 247.113 42.5 219.5V219H42H1.5H1V219.5C1 250.564 7.01267 277.316 19.0595 299.737L19.0611 299.739C31.1032 321.817 47.5015 338.72 68.2542 350.435L68.2625 350.44C89.3419 361.816 112.925 367.5 139 367.5C164.391 367.5 187.127 363.157 207.199 354.459L207.205 354.456C227.281 345.422 243.187 332.533 254.91 315.787ZM560.183 305.745L560.182 305.746C542.605 335.594 516.602 350.5 482.113 350.5C447.289 350.5 420.784 335.592 402.541 305.741C384.271 275.513 375.113 234.947 375.113 184C375.113 133.053 384.272 92.6545 402.54 62.7607L402.541 62.7586C420.785 32.5728 447.291 17.5 482.113 17.5C516.599 17.5 542.603 32.5697 560.181 62.7516L560.185 62.7572C578.121 92.6518 587.113 133.052 587.113 184C587.113 234.948 578.121 275.516 560.183 305.745ZM345.647 91.3201L345.646 91.3232C335.288 118.722 330.113 149.617 330.113 184C330.113 218.384 335.288 249.444 345.645 277.175L345.647 277.182C356.347 304.6 373.072 326.513 395.821 342.906C418.591 359.314 447.367 367.5 482.113 367.5C533.235 367.5 571.072 350.452 595.52 316.291L595.521 316.289C619.929 281.851 632.113 237.742 632.113 184C632.113 130.26 619.93 86.3168 595.521 52.2109C571.074 17.7164 533.237 0.5 482.113 0.5C447.367 0.5 418.591 8.68623 395.821 25.0943C373.071 41.488 356.346 63.5687 345.647 91.3201ZM901.004 305.745L901.003 305.746C883.425 335.594 857.422 350.5 822.934 350.5C788.11 350.5 761.604 335.592 743.362 305.741C725.092 275.513 715.934 234.947 715.934 184C715.934 133.053 725.092 92.6545 743.36 62.7607L743.362 62.7586C761.606 32.5728 788.111 17.5 822.934 17.5C857.42 17.5 883.423 32.5697 901.002 62.7516L901.005 62.7572C918.942 92.6518 927.934 133.052 927.934 184C927.934 234.948 918.942 275.516 901.004 305.745ZM686.467 91.3201L686.466 91.3232C676.108 118.722 670.934 149.617 670.934 184C670.934 218.384 676.108 249.444 686.465 277.175L686.468 277.182C697.168 304.6 713.892 326.513 736.641 342.906C759.412 359.314 788.188 367.5 822.934 367.5C874.055 367.5 911.892 350.452 936.34 316.291L936.342 316.289C960.749 281.851 972.934 237.742 972.934 184C972.934 130.26 960.75 86.3168 936.342 52.2109C911.894 17.7164 874.057 0.5 822.934 0.5C788.188 0.5 759.412 8.68623 736.641 25.0943C713.891 41.488 697.166 63.5687 686.467 91.3201Z"
          stroke="black"
        />
      </svg>
      <Blob
        paths={ourStoryPaths}
        viewBox={[0, 0, 500, 500]}
        top="-10vh"
        left="30%"
        width="40%"
        threshold={1}
        growTime={1.2}
        morphAt={0.3}
        morphTime={1}
        animateWhen={true}
        color="#e8fde9"
      />
    </main>
  );
};

export default ErrorPage;
