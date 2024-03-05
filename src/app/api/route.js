import { NextResponse } from 'next/server';
// in .env.local: SECRET_TOKEN="<YOUR TOKEN HERE>"

export async function GET() {
    console.log(`${process.env.SECRET_TOKEN}`);

    try {
       // Send a request to a server here, e.g. using Axios
       return(NextResponse.json({ message: 'Success' }, { status: 200 }));
   } catch (error) {
       return NextResponse.json({ error: 'Error' }, { status: 500 });
   }
};
