import React from "react";
import arrayofObject from "./testimonial.json";
import style from "./AllTestimonial.module.css";

const Video = ({ role }) => {
  // Filter the array of videos based on the role
  let filtername = arrayofObject.alltestimonial.filter(
    (values) => values.keyword.toLowerCase() === role.toLowerCase()
  );

  return (
    <div>
      <ul className={style.flex}>
        {filtername.map((values, index) => (
          <li className={style.testimonial_card} key={index}>
            {values.videoUrl && (
              <>
                <div className={style.video_container}>
                  <iframe
                    width="100%"
                    height="300px"
                    src={values.videoUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <p style={{ marginTop: "10px", textAlign: "center" }}>
                  {values.content}
                </p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Video;
