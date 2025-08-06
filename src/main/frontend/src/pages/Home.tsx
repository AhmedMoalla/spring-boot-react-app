import {useFetch} from "@mantine/hooks";
import {Button} from "@mantine/core";

export default function Home() {
    const {data} = useFetch<Hello>(`/api/hello/world`)
    return (<div>Home: From Server: {data?.message}
        <Button>Primary button</Button></div>)
}