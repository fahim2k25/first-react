
export default function Todo({ task, status }) {
    if (status) {
        return (
            <li>{task}: Is Done</li>
        )
    } else {
        return (
            <li>{task}: Need to do</li>
        )
    }
}