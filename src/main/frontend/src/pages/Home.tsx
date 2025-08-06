import {useFetch} from "@mantine/hooks";

export default function Home() {
    const {data} = useFetch<Hello>(`/api/hello/world`)
    return (<div>Home: From Server: {data?.message}</div>)
}