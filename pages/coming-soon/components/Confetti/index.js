import { motion } from "framer-motion";
import React from "react";

const svgVariants = {
  initial: {},
  animate: {},
};

const pathVariants = {
  initial: {
    opacity: 0,
    scale: 0,
    originY: 1,
    rotateZ: 10,
  },
  animate: {
    opacity: 1,
    scale: 0.7,
    rotateZ: -10,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 3,
      yoyo: Infinity,
    },
  },
};

const Confetti = () => {
  return (
    <motion.svg
      variants={svgVariants}
      initial="initial"
      animate="animate"
      width="4.1rem"
      height="4rem"
      viewBox="0 0 41 40"
    >
      <path
        fill="#FD5"
        d="M20.928 19.547L15.78 27.59 0 39.97l3.622-9.334 1.007-.822-.092-1.537.835-2.151.925-.602-.019-1.733.84-2.162 1.255-.756-.365-1.54.854-2.2 1.27-.587-.392-1.677 1.472-3.792 1.902 1.472c2.778 2.147 5.387 4.484 7.814 6.998z"
        transform="translate(-147 -638) translate(76 55) translate(0 209) translate(5 353) translate(66 21)"
      />
      <motion.path
        variants={pathVariants}
        fill="#00CB76"
        d="M39.374 20.73c-.397.179-.601.115-1.095-.04-.615-.192-1.545-.482-2.752.06-1.207.543-1.607 1.431-1.871 2.02-.213.47-.3.666-.697.845-.397.178-.602.114-1.095-.04-.616-.193-1.546-.483-2.752.06l.959 2.133c.397-.179.601-.115 1.095.04.352.11.807.252 1.358.252.412 0 .877-.08 1.394-.312 1.207-.542 1.606-1.43 1.87-2.019.213-.472.301-.667.698-.845.397-.179.601-.115 1.095.04.615.192 1.545.482 2.752-.06l-.959-2.134z"
        transform="translate(-147 -638) translate(76 55) translate(0 209) translate(5 353) translate(66 21)"
      />
      <motion.path
        variants={pathVariants}
        fill="#8BBBFF"
        d="M19.834.051c-.228.472-.472.585-.96.808-.63.29-1.494.687-2.088 1.916-.594 1.23-.368 2.153-.203 2.827.127.52.19.782-.038 1.254s-.472.584-.959.808c-.63.29-1.495.686-2.089 1.915l2.107 1.018c.228-.472.472-.584.959-.808.63-.29 1.495-.686 2.089-1.915.594-1.23.368-2.153.203-2.827-.127-.52-.191-.782.037-1.254s.472-.584.96-.808c.63-.29 1.494-.687 2.088-1.916L19.834.051z"
        transform="translate(-147 -638) translate(76 55) translate(0 209) translate(5 353) translate(66 21)"
      />
      <motion.path
        variants={pathVariants}
        fill="#1F7099"
        d="M22.018 5.642L24.357 5.642 24.357 7.982 22.018 7.982zM27.866.184L30.205.184 30.205 2.524 27.866 2.524z"
        transform="translate(-147 -638) translate(76 55) translate(0 209) translate(5 353) translate(66 21)"
      />
      <motion.path
        variants={pathVariants}
        fill="#284866"
        d="M31.375 15.389L33.714 15.389 33.714 17.702 31.375 17.702zM37.223 11.88L39.562 11.88 39.562 14.193 37.223 14.193z"
        transform="translate(-147 -638) translate(76 55) translate(0 209) translate(5 353) translate(66 21)"
      />
      <motion.path
        variants={pathVariants}
        fill="#1F7099"
        d="M9.152 6.032L11.492 6.032 11.492 8.311 9.152 8.311zM11.492.184L13.831.184 13.831 2.463 11.492 2.463z"
        transform="translate(-147 -638) translate(76 55) translate(0 209) translate(5 353) translate(66 21)"
      />
      <motion.path
        variants={pathVariants}
        fill="#284866"
        d="M32.544 29.484L34.883 29.484 34.883 31.763 32.544 31.763zM37.223 25.915L39.562 25.915 39.562 28.194 37.223 28.194z"
        transform="translate(-147 -638) translate(76 55) translate(0 209) translate(5 353) translate(66 21)"
      />
      <path
        fill="#FFF69E"
        d="M18.136 22.272l-1.674 1.633c-2.339-2.45-4.877-4.71-7.6-6.772l.878-2.264c3.021 2.238 5.824 4.71 8.396 7.403zM14.738 25.587l-1.674 1.634c-1.866-1.979-3.852-3.845-5.947-5.592l.89-2.296c2.382 1.94 4.63 4.029 6.731 6.254zM11.417 28.828l-1.674 1.634c-1.4-1.501-2.859-2.949-4.37-4.336l.905-2.335c1.785 1.601 3.5 3.284 5.139 5.037zM8.22 31.947l-1.673 1.635c-.953-1.005-1.93-1.988-2.925-2.946l.915-2.359c1.259 1.187 2.488 2.411 3.684 3.67z"
        transform="translate(-147 -638) translate(76 55) translate(0 209) translate(5 353) translate(66 21)"
      />
      <path
        fill="#FFB555"
        d="M20.928 19.547c2.748 2.846 5.262 5.916 7.521 9.189l.88 1.274-3.946 1.34-1.91-.42-.383 1.198-2.31.785-1.699-.282-.619 1.069-2.24.76-1.484-.163-.864.961-2.056.699-2.075-.286-.31 1.096L0 39.97"
        transform="translate(-147 -638) translate(76 55) translate(0 209) translate(5 353) translate(66 21)"
      />
      <g fill="#FD5">
        <path
          d="M18.912 9.128l-2.294.778c-1.986-2.934-4.2-5.68-6.628-8.223L11.664.049c2.672 2.797 5.093 5.828 7.248 9.079zM14.309 10.69l-2.318.788c-1.667-2.272-3.47-4.436-5.398-6.48l1.674-1.633c2.173 2.3 4.191 4.747 6.042 7.325zM9.75 12.239l-2.347.797C6.09 11.384 4.712 9.783 3.272 8.24l1.673-1.634c1.687 1.804 3.29 3.685 4.805 5.633zM5.346 13.734l-2.385.81C2.026 13.463 1.063 12.4.075 11.36l1.674-1.634c1.238 1.303 2.439 2.642 3.597 4.01z"
          transform="translate(-147 -638) translate(76 55) translate(0 209) translate(5 353) translate(66 21) translate(6.472 22.222)"
        />
      </g>
      <motion.path
        variants={pathVariants}
        fill="#DF6666"
        d="M39.612 1.891c-.33.321-.35.556-.393 1.07-.057.684-.136 1.62-1.093 2.551-.956.93-1.894.983-2.58 1.022-.515.028-.75.042-1.08.363-.33.32-.35.555-.393 1.07-.057.684-.136 1.62-1.093 2.55-.957.93-1.895.984-2.58 1.022-.515.029-.75.042-1.08.363-.33.32-.35.555-.393 1.07-.057.684-.136 1.62-1.092 2.55-.957.93-1.895.984-2.58 1.022-.515.029-.75.042-1.08.363l-.265-.271 8.178-8.325 7.235-6.717.289.297z"
      />
      <motion.path
        variants={pathVariants}
        fill="#E69768"
        d="M39.323 1.594L23.91 16.636l-1.367-1.406c.957-.93 1.895-.983 2.58-1.022.516-.028.75-.042 1.08-.363.33-.32.35-.555.393-1.069.058-.684.137-1.62 1.093-2.551.957-.93 1.895-.983 2.58-1.022.515-.028.75-.042 1.08-.363.33-.32.35-.555.393-1.069.058-.684.136-1.62 1.093-2.551.957-.93 1.895-.983 2.58-1.022.515-.028.75-.042 1.08-.363.33-.32.35-.555.393-1.07.058-.684.137-1.62 1.093-2.55l1.342 1.38z"
      />
    </motion.svg>
  );
};

export default Confetti;
