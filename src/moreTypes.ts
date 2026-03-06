
const enVariable: any = "Secrect"
const envLength = (enVariable as string).length


// const inputElement = document.getElementById("input") as HTMLInputElement

try {
    //  ...code
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("error", error);
}