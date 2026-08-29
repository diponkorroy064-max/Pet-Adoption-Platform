import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("pet-adoption-database");


export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
    },

    user: {
        additionalFields: {
            role: {
                type: "string",
                default: "user",
            },
        }
    },
    
    baseURL: process.env.BETTER_AUTH_URL,
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        },
    },
    plugins: [
        jwt(),
    ],
    session: {
        cookieCache: {
            enabled: true,
            strategy: "jwt",
            // max 7 days---
            maxAge: 7 * 24 * 60 * 60
        }
    }
});


