import ApiManager from "./Apimanage";
export const userapi = async data => {
    try {
        const result = await ApiManager("/api/common/login", {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            data: data,

        });
        return result;
    }
    catch (err) {
        return err
    }
}

