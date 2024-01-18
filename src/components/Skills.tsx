import { FaRegSquareCheck } from "react-icons/fa6";

function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "Nest.js",
    "Redux",
    "MongoDB",
    "SQL",
  ];

  return (
    <div id="skills" className="bg-dark">
      <section className="skills container py-4 text-white">
        <div className="row d-flex flex-row justify-content-center">
          <div className="col-md-8 my-auto mx-auto">
            <ul className="d-flex flex-row list-group skills-svgs gap-3 d-flex justify-content-center">
              <li className="w-25 list-group-item p-0 border-0 m-0 bg-dark">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path
                    fill="#F0DB4F"
                    d="M1.408 1.408h125.184v125.185H1.408z"
                  />
                  <path
                    fill="#323330"
                    d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                  />
                </svg>
                &nbsp;
              </li>
              <li className="w-25">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
                  <path
                    data-name="original"
                    fill="#007acc"
                    d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                  />
                </svg>
                &nbsp;
              </li>
              <li className="w-25">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <g fill="#61DAFB">
                    <circle cx="64" cy="47.5" r="9.3" />
                    <path d="M64 81.7C71.3 88.8 78.5 93 84.3 93c1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3C56.7 6.3 49.5 2.1 43.7 2.1c-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zM46 57.9c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zM69.6 26.8c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zM40.9 7.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7C24.5 56.9 17.8 52 17.8 47.5c0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zm-4.2 41.2c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0H16V125h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zm38.7 1.3c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zM42.6 115c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2H42.6zm30.7-8.7c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zm15.6-9.9c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zm20.8 13.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.8c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z" />
                  </g>
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path
                    fill="#FFD845"
                    d="M40 68V57.921C40 50.948 46.218 45 53.383 45h21.102C80.359 45 84 39.96 84 34.062V13.945c0-5.726-4.306-10.026-10.04-10.981a62.801 62.801 0 00-10.743-.862c-3.611.017-7.339.324-10.374.862C43.902 4.542 42 7.848 42 13.945V22h21v3H34.891c-6.14 0-11.516 3.53-13.198 10.552-1.939 8.047-2.025 13.202 0 21.605C23.195 63.411 26.782 68 32.921 68H40zm12.054-51.372c-2.19 0-3.964-1.795-3.964-4.013 0-2.229 1.773-4.039 3.964-4.039 2.182 0 3.964 1.811 3.964 4.039 0 2.218-1.782 4.013-3.964 4.013zm54.121 18.924C104.658 29.438 101.759 25 95.612 25H87v9.062C87 41.335 81.516 48 74.485 48H53.383C47.603 48 42 52.403 42 58.193V78.31c0 5.725 5.388 9.093 10.974 10.734 6.686 1.967 12.781 2.322 20.782 0C79.074 87.504 84 84.406 84 78.31V71H63v-3h32.611c6.14 0 8.428-4.416 10.563-10.843 2.206-6.618 2.112-13.115.001-21.605zM75.814 75.625c2.19 0 3.965 1.795 3.965 4.015 0 2.227-1.774 4.037-3.965 4.037-2.182 0-3.963-1.811-3.963-4.037 0-2.22 1.781-4.015 3.963-4.015zm-40.903 36.424c0-3.757-1.072-5.686-3.214-5.791a6.03 6.03 0 00-2.495.409c-.646.231-1.082.461-1.311.692v8.968c1.371.86 2.588 1.26 3.649 1.197 2.247-.148 3.371-1.971 3.371-5.475zm2.643.157c0 1.909-.447 3.493-1.348 4.753-1.003 1.427-2.394 2.16-4.172 2.201-1.34.043-2.721-.378-4.142-1.258v8.151l-2.298-.82V107.14c.377-.462.862-.859 1.451-1.196 1.368-.798 3.031-1.207 4.987-1.228l.033.032c1.788-.022 3.166.712 4.134 2.201.902 1.366 1.355 3.117 1.355 5.257zm14.049 5.349c0 2.56-.257 4.333-.77 5.318-.516.986-1.497 1.773-2.945 2.359-1.174.463-2.444.714-3.808.757l-.38-1.448c1.386-.188 2.362-.378 2.928-.566 1.114-.377 1.878-.955 2.298-1.73.337-.631.503-1.835.503-3.618v-.599a11.809 11.809 0 01-4.941 1.068c-1.132 0-2.13-.354-2.99-1.068-.966-.777-1.449-1.764-1.449-2.958v-9.566l2.299-.787v9.63c0 1.028.332 1.82.996 2.376s1.524.822 2.578.803c1.054-.022 2.183-.431 3.382-1.228v-11.234h2.299v12.491zm8.973 1.479a9.457 9.457 0 01-.757.032c-1.3 0-2.314-.309-3.038-.93-.722-.622-1.084-1.479-1.084-2.573v-9.054h-1.574v-1.446h1.574v-3.84l2.296-.817v4.657h2.583v1.446h-2.583v8.991c0 .862.231 1.474.694 1.83.397.295 1.029.463 1.889.506v1.198zm13.917-.189h-2.298v-8.873c0-.902-.211-1.68-.631-2.329-.485-.734-1.159-1.102-2.024-1.102-1.054 0-2.372.556-3.954 1.668v10.636h-2.298V97.637l2.298-.725v9.659c1.469-1.068 3.073-1.604 4.816-1.604 1.218 0 2.203.41 2.958 1.228.757.817 1.134 1.836 1.134 3.053v9.597h-.001zm12.218-7.157c0-1.444-.274-2.636-.82-3.579-.649-1.149-1.657-1.756-3.021-1.818-2.52.146-3.778 1.951-3.778 5.412 0 1.587.262 2.912.79 3.976.674 1.356 1.685 2.024 3.033 2.002 2.531-.02 3.796-2.017 3.796-5.993zm2.518.015c0 2.055-.526 3.765-1.575 5.131-1.154 1.528-2.749 2.296-4.783 2.296-2.017 0-3.589-.768-4.723-2.296-1.028-1.366-1.542-3.076-1.542-5.131 0-1.932.556-3.556 1.668-4.879 1.174-1.403 2.718-2.107 4.627-2.107 1.909 0 3.463.704 4.66 2.107 1.111 1.323 1.668 2.947 1.668 4.879zm13.178 7.142h-2.299v-9.376c0-1.028-.31-1.831-.928-2.409-.619-.576-1.443-.855-2.472-.833-1.091.021-2.13.378-3.116 1.069v11.549h-2.299v-11.833c1.323-.963 2.54-1.592 3.652-1.886 1.049-.274 1.974-.41 2.771-.41.545 0 1.059.053 1.542.158.903.209 1.637.596 2.203 1.164.631.629.946 1.384.946 2.267v10.54z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="d-flex flex-row list-group skills-svgs gap-3 d-flex justify-content-center align-items-center">
              <li className="w-25 list-group-item bg-dark border-0 text-light">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path
                    fill="#DF234F"
                    d="M25.7 44v.4c0 1-.3 1.1-.5 1.7-.3.7-.2 1.6.2 2.2 0 .1.1.2.1.2-.4-2.8 1.9-3.3 2.4-4.1 0-.8-.6-1.3-1.1-1.6-.5-.3-.9-.4-1.3-.4-.3 0-.6.1-.9.2.6.4.9.9 1.1 1.4z"
                  />
                  <path
                    fill="#DF234F"
                    d="M37.2 51v.4c0 .3-.1.5-.1.7-.1.2-.1.5-.2.7-.1.2-.2.5-.3.7-.1.2-.2.5-.3.7-.1.2-.3.4-.4.6-.1.2-.3.4-.5.6-.2.2-.3.4-.5.6l-.3.3c-.1.1-.2.1-.3.2-.2.2-.4.3-.6.4-.2.1-.4.3-.7.4-.2.1-.5.2-.7.3-.2.1-.5.2-.7.2-.2.1-.5.1-.7.2-.3 0-.5.1-.8.1h-1.3c-.3 0-.5-.1-.8-.1-.3 0-.5-.1-.7-.2.2 0 .5 0 .7-.1.3 0 .5-.1.7-.2.2-.1.5-.1.7-.2.2-.1.5-.2.7-.3.2-.1.4-.2.7-.4.2-.1.4-.3.6-.4.2-.2.4-.3.6-.5l.5-.5c.2-.2.3-.4.5-.6 0 0 0-.1.1-.1.1-.2.2-.4.3-.5.1-.2.2-.4.3-.7.1-.2.2-.5.3-.7.1-.2.1-.5.2-.7 0-.3.1-.5.1-.7v-.8-.5c0-.3-.1-.5-.1-.7 0-.3-.1-.5-.2-.7-.1-.2-.2-.5-.2-.7-.1-.2-.2-.5-.3-.7-.1-.2-.2-.4-.4-.7-.1-.2-.3-.4-.4-.6-.2-.2-.3-.4-.5-.6l-.3-.3c-.5-.4-1-.8-1.6-1.1-.1 0-.1-.1-.2-.1-.4-.2-.7-.4-1.1-.5v.6c0 .1 0 .2-.1.3 0 .1-.1.2-.1.3 0 .1-.1.2-.1.3l-.1.1s0 .1-.1.1c-.1.1-.1.2-.2.2l-.2.2-.2.2c-.2.2-.5.3-.7.5-.1.1-.2.1-.2.2l-.2.2-.2.2-.2.2c-.1.1-.1.2-.2.2 0 .1-.1.2-.1.3 0 .1-.1.2-.1.3 0 .1-.1.2-.1.3v1c0 .1 0 .2.1.3 0 .1.1.2.1.3 0 .1.1.1.1.2l-2.6-1c-.4-.1-.9-.2-1.3-.3-.2-.1-.5-.1-.7-.2-.7-.1-1.4-.2-2-.3h-.1c-.7-.1-1.3-.1-2-.1-.5 0-1 0-1.5.1-.7 0-1.4.1-2 .2-.2 0-.3.1-.5.1-.3.1-.7.1-1 .2-.2 0-.3.1-.5.1-.2.1-.3.1-.5.2-.1.1-.2.1-.4.2H11c-.1.1-.2.1-.3.2h-.1c-.1.1-.2.1-.3.2-.1 0-.2.1-.2.1s-.1 0-.1.1c-.1.1-.2.1-.3.2-.1.1-.2.1-.3.2-.1.1-.2.1-.2.2-.1 0-.1.1-.2.2-.1 0-.1.1-.2.1h-.1c-.1 0-.1.1-.2.1l-.2.2-.2.2c-.1-.2-.1-.2-.2-.1 0 0-.1 0-.1.1l-.2.2v.1l-.3.3c-.2.2-.4.4-.6.5-.2.2-.4.3-.6.5-.2.2-.4.3-.7.4-.2.1-.4.2-.7.3-.2.1-.5.2-.7.3-.5.1-1 .3-1.4.3h-.3c-.1 0-.2 0-.3.1 0 .1-.1.1-.2.1s-.2.1-.3.1c-.1.1-.2.1-.2.2-.1.1-.2.1-.2.2-.1.1-.2.1-.2.2l-.2.2c-.1.1-.1.2-.2.3-.1.1-.1.2-.2.3 0 .1-.1.2-.1.3 0 .1-.1.2-.1.3 0 .1 0 .2-.1.3v.8c0 .1 0 .1.1.2 0 .1.1.1.1.2s.1.1.1.2l.2.2.2.2c.3.2.3.3.7.5.1 0 .1.1.2.1v.1c0 .1 0 .2.1.3 0 .1.1.2.1.3 0 .1.1.1.1.2v.1c0 .1.1.2.1.2.1.1.1.2.2.2l.2.2.2.2.2.2c.1.1.2.1.2.1.1 0 .2.1.3.1h.4v1.4c.3.3.8-.4 1.3-1.2-.1.8-.1 1.7 0 1.9.1.3.8-.6 1.4-1.6 7.9-1.8 15.2 3.6 15.9 11.4-.1-1.2-1.6-1.9-2.3-1.7-.3.8-.9 1.9-1.8 2.5.1-.7 0-1.5-.1-2.2-.2 1-.7 2-1.4 2.8-1.1.1-2.1-.4-2.7-1.2l-.1-.1c0-.1-.1-.2-.1-.2 0-.1-.1-.2-.1-.2v-.2-.2c0-.1 0-.2.1-.2 0-.1 0-.2.1-.2 0-.1.1-.2.1-.2.2-.5.2-1-.2-1.2-.1 0-.1-.1-.2-.1h-.1-.1c-.1 0-.2 0-.2-.1h-1c-.1 0-.2 0-.2.1-.1 0-.1.1-.2.1s-.1.1-.2.1c-2.9 1.5-1.3 5.5.4 6.6-.7.1-1.4.3-1.5.4.5.3 1 .5 1.5.7.7.2 1.5.4 1.8.5.9.2 1.9.3 2.8.2 5-.3 9-4.1 9.8-9.1 0 .1 0 .2.1.3 0 .2.1.4.1.6V73.8c0 .1 0 .2-.1.3 0 .1 0 .2-.1.3 0 .1 0 .2-.1.3 0 .1-.1.2-.1.3 0 .1-.1.2-.1.3 0 .1-.1.2-.1.3 0 .1-.1.2-.1.3 0 .1-.1.2-.1.3 0 .1-.1.2-.1.3v.1c-.7 1.5-1.8 2.8-3.1 3.8-.1.1-.2.1-.3.2 0 0-.1 0-.1.1-.1.1-.2.1-.2.2v.1c.2 0 .3 0 .5-.1.3 0 .6-.1.9-.2.1 0 .2 0 .2-.1h.4c.1 0 .1 0 .2-.1 1.1-.3 2.2-.6 3.2-1.1-1.8 2.4-4.2 4.4-6.9 5.7 1.3-.1 2.6-.3 3.8-.7 4.5-1.3 8.3-4.4 10.6-8.4-.5 2.6-1.5 5-3 7.2 1.1-.7 2.1-1.5 3-2.5 2.5-2.6 4.1-5.9 4.7-9.5.4 1.8.5 3.6.3 5.4 7.8-10.8.4-22.5-2.7-25.6zM75.2 71c.4-10.3-.4-11.2-.4-11.2-4.5-7.3-11.9 0-11.9 0v-4.2h-1.1c-1.5 2.7-5.8 3.2-5.8 3.2v1.1c2.8.6 2.5 1.9 2.5 1.9s.1 6.7.1 8.8c0 2.1-.7 1.7-.7 1.7l-1.9.4v1.2c2-.6 9.1 0 9.1 0l.1-1.2c-2.1-.3-2.3-1.6-2.3-1.6v-9.9c1.9-1.7 3.7-2.3 3.7-2.3 3.7-.9 4 2.7 4 2.7l.1 9.1c.7 2.4-2.8 2-2.8 2l.1 1.2 5.5-.4 3.7.4v-1.2c-1.8-.3-1.9-.3-2-1.7zM88.2 56.2c-8 0-8.4 7.2-8.4 7.2s-1.4 10.9 8.4 10.9c6.3 0 8.2-3.6 8.2-3.6l-1.2-1.1s-9.4 6.8-10.6-6.1h11.9c-.1-.1-.3-7.3-8.3-7.3zm3.7 5.9h-7.4v-.5c0-2.1 1.7-3.9 3.9-3.9 1.9 0 3.5 1.6 3.5 3.5v.9zM109.4 63.7c-2.7-.5-4.5-1.2-4.5-1.2s-4.2-1.7-.5-4.2c4.1-2.1 6.5 3.9 6.5 3.9s.9.2 1.5-.3c.2-.6-.5-4.2-.5-4.2s-1.3-1.6-7.8-1.1c0 0-3.5.8-4.1 4.1-.6 3.3 1.5 5.1 1.5 5.1s.9 1.3 4 1.6c2.7.3 3.9 1.4 3.9 1.4s1.4 1.3-.1 2.9c-1.5 1.6-3.5 1-3.5 1s-2.3.1-5-4.6l-1.3.1.5 4.7s6.4 3.6 11.3 0c5-4.5.8-8.7-1.9-9.2zM127.1 70.6c-3.1 2.6-3.7-.5-3.7-.5V59.5h4.2v-2h-4v-4.3h-1.3c-1.8 3.8-5.8 5.1-5.8 5.1v.8c0 .5.4.5.4.5h2s-.2 7.7-.1 10.4 2 3.5 2 3.5 1.3.7 3.4.5c2.1-.2 3.6-2.3 3.6-2.3l-.7-1.1z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path fill="none" d="M0 0h128v128H0z" />
                  <path
                    d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z"
                    fill="#764abc"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#94795D"
                    d="M87.259 100.139c.169-.325.331-.612.469-.909.087-.19.221-.228.41-.223 1.133.032 2.266.067 3.4.078.963.01 1.928-.008 2.892-.019 1.086-.013 2.172-.07 3.257-.039 1.445.042 2.853.325 4.16.968 1.561.769 2.742 1.94 3.547 3.483a8.71 8.71 0 01.931 3.14c.172 1.608.059 3.179-.451 4.717-.632 1.906-1.832 3.365-3.499 4.458-1.283.841-2.69 1.338-4.198 1.622-1.596.301-3.197.204-4.798.209-1.756.007-3.511-.031-5.267-.051-.307-.003-.351-.061-.27-.354l.075-.27c.171-.538.263-.562.809-.652a2.83 2.83 0 001.087-.413c.184-.122.26-.44.332-.685.062-.214.065-.449.067-.675.025-3.425.051-6.849.065-10.272a44.077 44.077 0 00-.065-2.596c-.034-.605-.357-1.019-1.077-1.162-.56-.111-1.124-.197-1.687-.296l-.189-.059zm16.076 8.293c-.076-.682-.113-1.37-.235-2.042-.292-1.613-.998-3.018-2.238-4.119-2.005-1.779-4.419-2.053-6.949-1.841-.576.048-.7.245-.709.837-.014.84-.028 1.68-.029 2.52-.004 2.664-.004 5.328 0 7.992.001.758.009 1.516.031 2.272.024.774.305 1.429 1.063 1.729 1.195.473 2.452.529 3.706.336 2.003-.307 3.404-1.474 4.344-3.223.744-1.388.954-2.903 1.016-4.461zm4.869 9.071c-.024-.415.146-.758.356-1.073.057-.085.253-.081.388-.108l1.146-.227c.405-.086.618-.358.675-.755.038-.262.074-.527.077-.792a879.6 879.6 0 00.059-6.291c.01-2.1.002-4.2.002-6.3l-.009-.401c-.041-.675-.367-1.025-1.037-1.124l-1.453-.221c-.179-.024-.244-.11-.179-.269.112-.271.219-.552.377-.796.059-.09.258-.125.392-.122.694.01 1.388.062 2.082.061l6.041-.036c1.164-.001 2.288.202 3.332.759 1.149.612 1.792 1.559 1.976 2.849.192 1.355-.219 2.497-1.209 3.404-.407.374-.934.618-1.406.922l-.154.096c.438.161.855.3 1.261.466 1.188.487 2.133 1.248 2.633 2.463.395.959.395 1.959.161 2.953-.364 1.556-1.389 2.591-2.722 3.374-1.251.735-2.605 1.163-4.047 1.235-1.33.067-2.666.042-3.999.057l-.772.004a996.106 996.106 0 01-3.854-.096l-.117-.032zm5.537-6.089h.013c0 .658-.009 1.316.003 1.974.008.426-.007.864.085 1.274.138.613.418 1.166 1.106 1.342a6.671 6.671 0 002.818.124c1.177-.205 2.116-.795 2.631-1.916.382-.833.439-1.716.308-2.618-.174-1.188-.805-2.05-1.854-2.615-.688-.371-1.422-.598-2.204-.628-.876-.033-1.753-.035-2.629-.062-.246-.007-.28.118-.279.32.005.934.002 1.869.002 2.805zm1.865-4.475c.479-.024 1.021-.031 1.56-.085 1.032-.103 1.759-.622 2.138-1.609.193-.501.185-1.017.19-1.538.015-1.357-.777-2.469-2.066-2.929-.995-.355-2.021-.361-3.053-.333-.418.011-.605.194-.611.615l-.062 5.489c-.003.218.091.312.303.319l1.601.071z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#50382B"
                    d="M10.543 116.448l-.073.944c-.68 0-1.307-.005-1.934.002-1.181.012-2.362.031-3.544.048l-.114.007c-.169-.02-.476-.02-.484-.07-.05-.281-.034-.576-.021-.867.001-.033.116-.075.183-.091l.919-.205c.573-.149.775-.396.802-.988.031-.667.062-1.335.065-2.002.009-1.642-.001-3.282.006-4.924.001-.384-.132-.67-.49-.826a43.787 43.787 0 00-1.285-.546c-.204-.082-.469-.127-.445-.401.024-.279.281-.352.523-.407 1.002-.229 2.005-.452 3.004-.696.322-.079.63-.212 1.015-.346.02.208.057.406.053.604l-.059.941c-.001.106.054.248.133.307.048.037.209-.03.289-.092.854-.65 1.758-1.211 2.789-1.538 1.597-.507 2.968-.037 3.928 1.34.338.485.339.485.808.146.805-.585 1.647-1.101 2.589-1.441 2.068-.747 4.055.201 4.774 2.284.262.756.362 1.537.36 2.335l-.019 5.298c-.001.437.144.686.56.822.467.153.951.258 1.477.396l-.122.911c-.598 0-1.148-.004-1.698.001-1.344.012-2.688.019-4.031.05-.234.006-.295-.052-.307-.271-.039-.701-.045-.7.615-.858l.222-.057c.645-.176.86-.374.865-1.028.015-1.878.054-3.761-.041-5.635-.099-1.944-1.642-2.979-3.526-2.481a5.194 5.194 0 00-1.69.814c-.175.125-.208.269-.194.488.053.828.086 1.657.093 2.486.012 1.451-.006 2.902 0 4.354.002.588.203.813.784.949l.863.199.16.036c.012.276.023.552.01.828-.008.173-.142.188-.292.185-.839-.021-1.679-.049-2.518-.047-1.021.002-2.041.031-3.061.049h-.24c0-.293-.014-.573.01-.852.005-.067.123-.161.204-.182l1.006-.213c.427-.105.631-.324.655-.758.114-2.01.196-4.021.007-6.03a3.695 3.695 0 00-.326-1.145c-.515-1.138-1.674-1.613-3.011-1.271-.635.162-1.208.453-1.75.82a.795.795 0 00-.378.695c0 2.005.007 4.01.013 6.014l.011.773c.012.539.241.823.776.939.344.078.692.131 1.082.203z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#4F382B"
                    d="M71.001 105.285c.155.754.152 1.432-.402 1.946-.55.511-1.246.339-1.925.225.063.358.133.662.167.97.247 2.289-.738 3.988-2.861 4.959-.802.366-1.653.502-2.522.572-.432.034-.81.364-.851.719-.042.36.184.73.636.838.533.127 1.089.163 1.636.226 1.174.134 2.361.195 3.521.405 1.754.316 2.733 1.847 2.424 3.609-.275 1.568-1.183 2.709-2.449 3.584-2.133 1.478-4.473 1.91-6.965 1.156-1.425-.432-2.43-1.369-2.777-2.885-.174-.759.011-1.446.582-1.961.679-.61 1.418-1.154 2.129-1.73l.23-.231-.264-.185c-.725-.344-1.305-.815-1.53-1.633-.077-.277.003-.459.238-.601.4-.241.798-.486 1.193-.735.186-.116.37-.236.543-.37.236-.18.215-.314-.067-.418-.656-.242-1.239-.593-1.691-1.133-.755-.901-.969-1.974-.907-3.107.097-1.77 1.058-2.936 2.62-3.686 1.857-.891 3.72-.947 5.613-.135.7.3 1.438.364 2.189.312.561-.04 1.051-.252 1.49-.711zm-6.843 12.681c-1.394-.012-1.831.16-2.649.993-.916.934-.911 2.229.003 3.167.694.711 1.56 1.044 2.523 1.144 1.125.116 2.233.069 3.255-.494 1.09-.603 1.632-1.723 1.387-2.851-.203-.931-.889-1.357-1.724-1.602-.95-.278-1.932-.331-2.795-.357zm-2.738-8.908c.051.387.072.779.158 1.158.223.982.65 1.845 1.627 2.282 1.147.515 2.612.294 3.114-1.316a4.853 4.853 0 00-.113-3.274 2.512 2.512 0 00-.91-1.184c-.996-.695-2.793-.787-3.525.749-.238.499-.331 1.03-.351 1.585z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#4F372B"
                    d="M47.35 105.038c.037.171.111.365.113.56.003.371-.037.742-.058 1.113v.322l.314-.24c.86-.708 1.784-1.311 2.86-1.636 1.942-.585 3.882.478 4.515 2.456.24.752.335 1.525.344 2.311.02 1.746.032 3.492.05 5.238.006.627.078.739.671.92a7.4 7.4 0 001.03.229c.191.03.273.105.263.292l.002.172c-.007.723-.057.756-.758.754-1.678-.003-3.355.007-5.033.021-.5.004-.501.019-.551-.475l-.01-.284c.031-.426.041-.422.46-.484.282-.042.562-.107.837-.179.283-.073.419-.282.457-.562.019-.142.044-.284.043-.426-.024-1.908.007-3.818-.097-5.723-.084-1.541-1.26-2.459-2.807-2.354a4.047 4.047 0 00-2.071.743c-.413.289-.496.706-.494 1.155.008 1.784.025 3.568.044 5.353.004.391.015.782.052 1.17.039.424.188.595.604.687.398.088.804.139 1.229.21l.036.328c.014.765-.066.822-.809.819-1.735-.007-3.47.004-5.204.023-.273.004-.389-.082-.382-.348l-.004-.114c-.045-.689-.025-.715.627-.827l.308-.062c.706-.159.887-.347.897-1.064.033-2.271.045-4.541.068-6.812.003-.326-.12-.579-.424-.714a53.88 53.88 0 00-1.287-.544c-.238-.098-.51-.16-.519-.489-.006-.232.242-.437.581-.506.681-.138 1.368-.253 2.041-.422.67-.167 1.328-.391 2.062-.611z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#4F382B"
                    d="M84.865 110.97c-.032 2.121-.583 3.836-2.083 5.123-1.9 1.633-4.864 2.188-7.287.967-1.034-.521-1.794-1.32-2.289-2.357-.759-1.595-.949-3.272-.553-4.99.392-1.699 1.421-2.93 2.961-3.727 1.584-.819 3.252-1.139 5.011-.709 2.225.543 3.824 2.357 4.142 4.667.057.405.079.815.098 1.026zm-2.577 1.149l-.086-.01c0-.2.011-.4-.002-.6-.073-1.246-.353-2.433-1.075-3.476-.685-.988-1.618-1.571-2.832-1.656-1.359-.096-2.501.664-2.902 2.052-.602 2.084-.398 4.115.66 6.024.461.832 1.144 1.446 2.059 1.769 1.793.631 3.383-.186 3.85-2.022.172-.678.222-1.387.328-2.081z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#4F372B"
                    d="M40.819 111.134c-.037 1.522-.396 2.929-1.336 4.152-1.007 1.31-2.391 2.01-3.965 2.305-1.861.348-3.609.032-5.104-1.217-.71-.594-1.195-1.355-1.515-2.221-.525-1.42-.656-2.875-.333-4.358.345-1.587 1.241-2.8 2.63-3.614 1.606-.939 3.339-1.358 5.19-.936 2.38.544 3.754 2.095 4.262 4.443.102.474.116.964.171 1.446zm-2.606 1.004l-.069-.01v-.286c-.039-1.396-.312-2.726-1.145-3.886-.617-.861-1.443-1.401-2.502-1.552-1.726-.246-2.854.778-3.228 2.169-.488 1.817-.335 3.612.42 5.335.471 1.074 1.215 1.911 2.358 2.317 1.782.633 3.396-.205 3.847-2.034.166-.669.216-1.367.319-2.053z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#439934"
                    d="M82.362 33.544c1.227 3.547 2.109 7.168 2.4 10.92.36 4.656.196 9.28-.786 13.859l-.126.366c-.308.001-.622-.038-.923.009-2.543.4-5.083.814-7.624 1.226-2.627.426-5.256.835-7.878 1.289-.929.16-2.079-.031-2.454 1.253l-.18.061.127-7.678-.129-18.526 1.224-.21c2.001-.327 4.002-.66 6.006-.979 2.39-.379 4.782-.749 7.174-1.119 1.056-.162 2.113-.313 3.169-.471z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#45A538"
                    d="M62.265 84.911c-1.291-1.11-2.627-2.171-3.864-3.339-6.658-6.28-11.529-13.673-13.928-22.586-.661-2.452-1.101-4.945-1.243-7.479-.1-1.774-.243-3.563-.117-5.328.333-4.693 1.012-9.341 2.388-13.862l.076-.105c.134.178.326.336.394.537 1.344 3.956 2.677 7.916 4.004 11.879 4.169 12.451 8.333 24.905 12.509 37.354.082.243.293.442.445.661l-.664 2.268z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#46A037"
                    d="M82.362 33.544c-1.057.157-2.114.309-3.169.471-2.392.37-4.784.74-7.174 1.119-2.003.318-4.004.651-6.006.979l-1.224.21-.01-.798c-.041-.656-.109-1.312-.118-1.968l-.137-12.554c-.032-2.619-.08-5.238-.133-7.856a198.423 198.423 0 00-.141-4.88c-.04-.873-.181-1.742-.237-2.615-.033-.502.011-1.008.022-1.512.624 1.209 1.235 2.427 1.876 3.627 1.013 1.897 2.628 3.295 4.083 4.82 5.746 6.031 9.825 13.039 12.368 20.957z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#409433"
                    d="M64.792 62.527l.18-.061c.375-1.284 1.525-1.093 2.454-1.253 2.622-.454 5.251-.863 7.878-1.289 2.541-.411 5.081-.825 7.624-1.226.301-.047.615-.008.923-.009-.475 1.696-.849 3.429-1.452 5.078-.685 1.87-1.513 3.696-2.392 5.486a37.595 37.595 0 01-4.853 7.458c-1.466 1.762-3.1 3.393-4.737 5.002-.906.889-1.972 1.614-2.966 2.414l-.258-.176-.927-.792-.959-2.104a31.65 31.65 0 01-1.065-7.516l.018-.428.131-1.854c.043-.633.101-1.265.128-1.898.096-2.276.182-4.554.273-6.832z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#4FAA41"
                    d="M64.792 62.527c-.09 2.278-.176 4.557-.273 6.835-.027.634-.084 1.266-.128 1.898l-.584.221c-1.298-3.821-2.597-7.602-3.867-11.392-2.101-6.271-4.176-12.551-6.274-18.824a3423.013 3423.013 0 00-5.118-15.176c-.081-.236-.311-.422-.471-.631l3.74-6.877c.129.223.298.432.379.672 1.73 5.12 3.457 10.241 5.169 15.367 2.228 6.67 4.441 13.343 6.667 20.014.089.266.235.512.375.811l.512-.596-.127 7.678z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#4AA73C"
                    d="M48.076 25.458c.161.209.391.395.471.631a3379.774 3379.774 0 015.118 15.176c2.098 6.273 4.173 12.553 6.274 18.824 1.27 3.79 2.569 7.57 3.867 11.392l.584-.221-.131 1.854-.119.427c-.203 2.029-.374 4.062-.622 6.087-.124 1.015-.389 2.011-.59 3.015-.151-.219-.363-.418-.445-.661-4.177-12.449-8.34-24.903-12.509-37.354a3010.791 3010.791 0 00-4.004-11.879c-.068-.201-.26-.359-.394-.537l2.5-6.754z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#57AE47"
                    d="M64.918 54.849l-.512.596c-.14-.299-.286-.545-.375-.811-2.226-6.671-4.439-13.344-6.667-20.014a4618.057 4618.057 0 00-5.169-15.367c-.081-.24-.25-.449-.379-.672l4.625-6.084c.146.194.354.367.429.586 1.284 3.76 2.556 7.523 3.822 11.289 1.182 3.518 2.346 7.04 3.542 10.552.08.235.359.401.545.601l.01.798.129 18.526z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#60B24F"
                    d="M64.779 35.525c-.187-.199-.465-.365-.545-.601-1.195-3.512-2.36-7.034-3.542-10.552a2495.581 2495.581 0 00-3.822-11.289c-.075-.219-.283-.392-.429-.586 1.504-1.473 2.961-2.999 4.526-4.404 1.391-1.248 2.509-2.586 2.561-4.559l.11-.393.396.998c-.01.504-.055 1.01-.022 1.512.057.873.198 1.742.237 2.615.073 1.625.108 3.253.141 4.88.053 2.618.101 5.237.133 7.856l.137 12.554c.01.657.079 1.313.119 1.969z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#A9AA88"
                    d="M62.929 82.642c.201-1.004.466-2 .59-3.015.248-2.024.419-4.058.622-6.087l.051-.008.05.009a31.65 31.65 0 001.065 7.516c-.135.178-.324.335-.396.535-.555 1.566-1.079 3.145-1.637 4.71-.076.214-.29.381-.439.568l-.571-1.96.665-2.268z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#B6B598"
                    d="M62.835 86.871c.149-.188.363-.354.439-.568.558-1.565 1.082-3.144 1.637-4.71.071-.2.261-.357.396-.535l.959 2.104c-.189.268-.451.511-.556.81l-1.836 5.392c-.076.217-.333.369-.507.552l-.532-3.045z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#C2C1A7"
                    d="M63.367 89.915c.173-.183.431-.335.507-.552l1.836-5.392c.104-.299.367-.542.556-.81l.928.791c-.448.443-.697.955-.547 1.602l-.282.923c-.128.158-.314.296-.377.477-.641 1.836-1.252 3.682-1.898 5.517-.082.232-.309.415-.468.621l-.255-3.177z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#CECDB7"
                    d="M63.621 93.091c.16-.206.387-.389.468-.621.646-1.835 1.258-3.681 1.898-5.517.063-.181.249-.318.377-.477l-.389 4.236c-.104.12-.254.225-.304.364l-1.294 3.708c-.091.253-.265.479-.401.716-.121-.158-.337-.311-.347-.475-.038-.642-.011-1.289-.008-1.934z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#DBDAC7"
                    d="M63.977 95.501c.136-.237.31-.463.401-.716l1.294-3.708c.05-.14.201-.244.304-.364l.01 2.78-.931 2.387-1.078-.379z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#EBE9DC"
                    d="M65.055 95.88l.931-2.387.192 2.824-1.123-.437z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#CECDB7"
                    d="M66.646 85.554c-.149-.646.099-1.158.547-1.602l.258.176-.805 1.426z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#4FAA41"
                    d="M64.242 73.542l-.05-.009-.051.008.119-.427-.018.428z"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div className="col-md-4 skills-list">
            <h3 className="text-uppercase fw-bold ms-3 pt-3">Key Skills</h3>
            <hr className="w-50" />
            <ul className="list-group list-group-flush mx-4">
              {skills.map((skill) => (
                <li key={`${skill}`}>
                  <FaRegSquareCheck className="text-primary" />
                  <span className="ms-2 text-light">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="row mt-5 text-center">
            <div className="col-12">
              <a
                href="#contact"
                className="btn btn-primary btn-lg text-uppercase px-5 mx-3 my-2"
              >
                Hire Me Now
              </a>
              <a
                href="resume2024.pdf"
                className="btn btn-light btn-lg text-uppercase px-5 mx-3 my-2"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
