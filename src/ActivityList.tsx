function ActivityList () {
    const activities = ["Orientation", "Worshop", "Meeting"];

return (
    <>
    <ul>
        {activities.map((activities, index) => (
        <li key={index}>{activities}</li>
        ))}
    </ul>
    </>
)
}

export default ActivityList;


