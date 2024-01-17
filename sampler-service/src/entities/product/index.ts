import { createApiRoot } from "../../client/create.client"

export const getProducts = async () => {
    return createApiRoot().products().get().execute();
}