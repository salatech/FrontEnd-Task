const trackingData = [
	{ type: "date", iconContent: "30", date: "WED", month: "July", content: "" },
	{
		type: "task",
		iconContent: "assets/Ellipse 400.svg",
		date: "11:30 AM",
		content: "New task assigned to you",
		assets: "assets/Photo.png",
		name: "Sheila O'Reily",
	},
	{
		type: "task",
		iconContent: "assets/Ellipse 401.svg",
		date: "11:30 AM",
		content: "New feedback received for task name",
		assets: "assets/Photo.png",
		name: "Sheila O'Reily",
	},
	{
		type: "task",
		iconContent: "assets/Ellipse 402.svg",
		date: "11:30 AM",
		content: "Task marked completed by you",
		assets: "assets/Photo.png",
		name: "Sheila O'Reily",
	},
	{
		type: "task",
		iconContent: "assets/Ellipse 403.svg",
		date: "11:30 AM",
		content: "Task Name updated for journey Name",
		assets: "assets/Photo.png",
		name: "Sheila O'Reily",
	},
	{
		type: "task",
		iconContent: "assets/Ellipse 404.svg",
		date: "11:30 AM",
		content: "Follow up on feedback for Task Name completed on date XX/YY/ZZZZ",
		assets: "assets/Photo.png",
		name: "Sheila O'Reily",
	},
	{ type: "date", iconContent: "29", date: "THU", month: "July", content: "" },
	{
		type: "task",
		iconContent: "assets/Ellipse 405.svg",
		date: "11:30 AM",
		content: "Meeting with Bobbie Charlie",
		assets: "assets/Photo.png",
		name: "Sheila O'Reily",
	},
	{
		type: "task",
		iconContent: "assets/Ellipse 406.svg",
		date: "11:30 AM",
		content: "Chat about design mentorship",
		assets: "assets/Photo.png",
		name: "Sheila O'Reily",
	},
	{
		type: "task",
		iconContent: "assets/Ellipse 407.svg",
		date: "11:30 AM",
		content: "Critical delay observed in time line adherence",
		assets: "assets/Photo.png",
		name: "Sheila O'Reily",
	},
	{
		type: "task",
		iconContent: "assets/Ellipse 408.svg",
		date: "11:30 AM",
		content: "Finish project documentation for review (1-1 checking)",
		assets: "assets/Photo.png",
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
		let content = item.content;
		let truncatedContent = content;
		if (
			window.matchMedia("(max-width: 768px)").matches &&
			content.length > 20
		) {
			truncatedContent = content.substring(0, 20) + "...";
		}
		trackingItem.innerHTML = `
            <div class="tracking-icon">
                <img src="${item.iconContent}" alt="">
            </div>
            <div class="tracking-date">${item.date}</div>
            <div class="tracking-content">
                <span class="full-content" style="display: none;">${content}</span>
                <span class="tracking-content">${truncatedContent}</span>
                <span style="display: flex; color: #888;">
                    <span class="content-image"><img src="${item.assets}" alt=""></span>${item.name}
                </span>
            </div>
        `;

		trackingItem
			.querySelector(".tracking-content")
			.addEventListener("click", function () {
				const fullContent = this.querySelector(".full-content");
				const truncatedContent = this.querySelector(".tracking-content");
				if (fullContent.style.display === "none") {
					fullContent.style.display = "inline";
					truncatedContent.style.display = "none";
				} else {
					fullContent.style.display = "none";
					truncatedContent.style.display = "inline";
				}
			});
	}

	return trackingItem;
};

const trackingList = document.getElementById("tracking-list");

trackingData.forEach((item) => {
	trackingList.appendChild(createTrackingItem(item));
});
