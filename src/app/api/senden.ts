const handler = (req: { method: string; body: { gRecaptchaToken: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: string; message: string; }): void; new(): any; }; }; end: () => void; }) => {
    if (req.method === "POST") {
      try {
        fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=YOUR_SECRET_KEY_HERE&response=${req.body.gRecaptchaToken}`,
        })
          .then((reCaptchaRes) => reCaptchaRes.json())
          .then((reCaptchaRes) => {
            console.log(
              reCaptchaRes,
              "Response from Google reCaptcha verification API"
            );
            if (reCaptchaRes?.score > 0.5) {
              // Save data to the database here
              // Replace with your own logic for saving the data to your database
              const data = req.body; // Replace with your own data object
              console.log(data, "Data received from form submission");
              res.status(200).json({
                status: "success",
                message: "Enquiry submitted successfully",
              });
            } else {
              res.status(200).json({
                status: "failure",
                message: "Google ReCaptcha Failure",
              });
            }
          });
      } catch (err) {
        res.status(405).json({
          status: "failure",
          message: "Error submitting the enquiry form",
        });
      }
    } else {
      res.status(405);
      res.end();
    }
  };
  
  export default handler;
  