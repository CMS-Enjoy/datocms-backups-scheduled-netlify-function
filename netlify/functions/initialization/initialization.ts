import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Initialization completed successfully!`,
    }),
    headers: { "Access-Control-Allow-Origin": "*" },
  };
};
