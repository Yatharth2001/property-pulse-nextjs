import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async () => {
  try {
    connectDB();

    const properties = await Property.find({});
    return new Response(properties, {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
};
