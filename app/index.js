import { Redirect } from "expo-router";
import * as dotenv from "dotenv";

dotenv.config();

export default function Index() {
    return <Redirect href="/home" />;
}