const trackingData = [
	{ type: "date", iconContent: "30", date: "WED", month: "July", content: "" },
	{
		type: "task",
		iconContent: "img/Ellipse 400.svg",
		date: "11:30 AM",
		content: "New task assigned to you",
		img: "img/Photo.png",
		name: "Sheila O'Reily",
	},
	{
		type: "task",
		iconContent: "img/Ellipse 401.svg",
		date: "11:30 AM",
		content: "New feedback received for task name",
		img: "img/Photo.png",
		name: "Sheila O'Reily",
	},
	{
		type: "task",
		iconContent: "img/Ellipse 402.svg",
		date: "11:30 AM",
		content: "Task marked completed by you",
		img: "img/Photo.png",
		name: "Sheila O'Reily",
	},
	{
		type: "task",
		iconContent: "img/Ellipse 403.svg",
		date: "11:30 AM",
		content: "Task Name updated for journey Name",
		img: "img/Photo.png",
		name: "Sheila O'Reily",
	},
	{
		type: "task",
		iconContent: "img/Ellipse 404.svg",
		date: "11:30 AM",
		content: "Follow up on feedback for Task Name completed on date XX/YY/ZZZZ",
		img: "img/Photo.png",
		name: "Sheila O'Reily",
	},
	{ type: "date", iconContent: "29", date: "THU", month: "July", content: "" },
	{
		type: "task",
		iconContent: "img/Ellipse 405.svg",
		date: "11:30 AM",
		content: "Meeting with Bobbie Charlie",
		img: "img/Photo.png",
		name: "Sheila O'Reily",
	},
	{
		type: "task",
		iconContent: "img/Ellipse 406.svg",
		date: "11:30 AM",
		content: "Chat about design mentorship",
		img: "img/Photo.png",
		name: "Sheila O'Reily",
	},
	{
		type: "task",
		iconContent: "img/Ellipse 407.svg",
		date: "11:30 AM",
		content: "Critical delay observed in time line adherence",
		img: "img/Photo.png",
		name: "Sheila O'Reily",
	},
	{
		type: "task",
		iconContent: "img/Ellipse 408.svg",
		date: "11:30 AM",
		content: "Finish project documentation for review (1-1 checking)",
		img: "img/Photo.png",
		name: "Sheila O'Reily",
	},
];

const createTrackingItem = (item) => {
	const trackingItem = document.createElement("div");
	trackingItem.classList.add("tracking-item");

	if (item.type === "date") {
		trackingItem.style.borderLeft = "none";
		trackingItem.innerHTML = `
            <div class="tracking-icon" id="track-${
							item.iconContent === "30" ? "one" : "two"
						}">${item.iconContent}</div>
            <div class="tracking-date" id="head-date">${item.date}<span>${
			item.month
		}</span></div>
            <div class="tracking-content"></div>
        `;
	} else {
		trackingItem.innerHTML = `
            <div class="tracking-icon">
                <img src="${item.iconContent}" alt="">
            </div>
            <div class="tracking-date">${item.date}</div>
            <div class="tracking-content">${item.content}<span style="display: flex;"><span class="content-image"><img src="${item.img}" alt=""></span>${item.name}</span></div>
        `;
	}

	return trackingItem;
};

const trackingList = document.getElementById("tracking-list");

trackingData.forEach((item) => {
	trackingList.appendChild(createTrackingItem(item));
});
