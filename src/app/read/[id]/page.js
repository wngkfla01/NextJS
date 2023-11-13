export default async function Read(props){
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${props.params.id}`)
    const topic = await resp.json()
    return (
        <>
            <h2>{topic.title}</h2>
            parameters : {props.params.id}
        </>
    )
}