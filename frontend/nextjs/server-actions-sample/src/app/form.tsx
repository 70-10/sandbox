"use client"

import { useActionState } from "react";
import { } from "react-dom"

type State = {
    success: boolean;
    message: string;
    error?: Error;
}


async function myAction(_: State, formData: FormData): Promise<State> {
    console.log("Form data", formData.get("test"));
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
        success: true,
        message: "Success",
    }
}


export function MyForm() {
    const [result, fromDispatch] = useActionState(myAction, { success: false, message: "" });
    return <form action={fromDispatch}>
        <input type="hidden" name="test" value="foo" />
        <p>{JSON.stringify(result)}</p>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Increment</button>
    </form>
}
