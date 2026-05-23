import {
  PostAPI_Type,
  NextStepImg_Type,
} from "./type";

export async function PostImgAPI(imageSrc: string) {
  try {
    const result = await fetch(
      "https://campaign.creaive.ai/centrall/uploadBase64",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          img_upload: imageSrc,
        }),
      }
    ).then((response) => {
      response.json()

      // NextStepImgAPI(response)



    }).then((response) =>
      console.log(response)
    )
    return result
  } catch (e) {
    console.log(e);
  }
}


export async function NextStepImgAPI(_id: string) {
  try {
    const result = await fetch(
      "https://campaign.creaive.ai/central/generateNextStep",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          _id: _id,
        }),
      }
    ).then(response =>
      response.json()
    ).then((response) => {
      console.log(response, "POST request @ NextStepImgAPI")
    });
    console.log(result, "NextStepImgAPI");
  } catch (e) {
    console.log(e);
  }
}
