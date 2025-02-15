import { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload } from "primereact/fileupload";
import { Dropdown } from "primereact/dropdown";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import * as XLSX from "xlsx";
import "../styles/home.css";
import EventModal from "./components/EventModal";

const AdminEvents = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [isRegModal, setIsRegModal] = useState(false);

  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState(null);
  const [eventVenue, setEventVenue] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventMode, setEventMode] = useState("");
  const [events, setEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successDialogVisible, setSuccessDialogVisible] = useState(false);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/events`
      );
      const currentDate = new Date();
      const upcomingEvents = response.data.filter(
        (event) => new Date(event.eventDate) > currentDate
      );
      setEvents(upcomingEvents);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  const fetchPastEvents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/events`
      );
      const currentDate = new Date();
      const pastEvents = response.data.filter(
        (event) => new Date(event.eventDate) < currentDate
      );
      setPastEvents(pastEvents);
    } catch (error) {
      console.error("Error fetching past events", error);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchPastEvents();
  }, []);

  const handleAddEvent = async () => {
    if (isSubmitting) return; 
    setIsSubmitting(true);
  
    const formData = new FormData();
    formData.append("name", eventName);
    formData.append("description", eventDescription);
    formData.append("date", eventDate);
    formData.append("venue", eventVenue);
    formData.append("mode", eventMode);
    if (eventImage) {
      formData.append("image", eventImage);
    }
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/events`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      setDialogVisible(false); 
      setSuccessDialogVisible(true); 
      resetForm();
    } catch (error) {
      console.error("Error adding event", error);
    } finally {
      setIsSubmitting(false); 
    }
  };

  const resetForm = () => {
    setEventName("");
    setEventDescription("");
    setEventDate(null);
    setEventVenue("");
    setEventImage("");
    setEventMode("");
  };

  const onImageUpload = (e) => {
    if (e.files && e.files[0]) {
      setEventImage(e.files[0]);
    } else {
      console.log("No file selected");
    }
  };

  const modeOptions = [
    { label: "Online", value: "Online" },
    { label: "Offline", value: "Offline" },
  ];

  const openRegistrationDialog = async (eventName) => {
    console.log("Opening registration dialog for event:", eventName);
    setSelectedEvent(eventName);

    try {
      const encodedEventName = encodeURIComponent(eventName);
      const url = `${
        import.meta.env.VITE_API_URL
      }/events/${encodedEventName}/registrations`;
      console.log("Constructed URL:", url);
      const response = await axios.get(url);
      console.log("Fetched registrations:", response.data);
      setRegistrations(response.data);
    } catch (error) {
      console.error("Error fetching registrations", error);
    }

    setIsRegModal(true);
  };

 

  const downloadExcel = (data) => {
    if (!data.length) return;
  
    const eventName = data[0].eventTitle.replace(/\s+/g, "_"); 
    const fileName = `${eventName}_registrations.xlsx`;
  
    const worksheet = XLSX.utils?.json_to_sheet(data);
    const workbook = XLSX.utils?.book_new();
    XLSX.utils?.book_append_sheet(workbook, worksheet, "Registrations");
  
    XLSX.writeFile(workbook, fileName);
  };
  

  return (
    <div className="admin-dashboard-container">
      <AdminHeader />

      <div className="flex flex-col gap-10 p-3 sm:p-5 my-10 sm:px-14">
        <div className="flex ">
          <div className="font-black text-4xl sm:text-6xl">EVENTS</div>
          <div className="flex-auto border-b-4 mb-2 ml-2"></div>
        </div>

        <button
          className="bg-gradient-to-r from-red-600 to-blue-500  text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-700 hover:to-red-600 transition-colors duration-200"
          style={{ alignSelf: "flex-start" }}
          onClick={() => setDialogVisible(true)}
        >
          Add New Event
        </button>

        <div className="flex flex-col gap-10">
          <div className="flex">
            <div className="font-black text-2xl sm:text-4xl">
              UPCOMING EVENTS
            </div>
            <div className="flex-auto border-b-4 "></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {events.length > 0 ? (
              events.map((event) => (
                <div
                  key={event._id}
                  className="event-card w-full sm:w-80 overflow-hidden  p-5 border rounded-lg shadow-lg transition-transform duration-200 hover:scale-[1.01] bg-gradient-to-b from-gray-700 to-black text-white text-center"
                >
                  <div className="w-full h-60 overflow-hidden mb-4 rounded-lg">
                    <img
                      src={
                        `data:image/png;base64,${event.eventImage}` ||
                        "ccLogo.svg"
                      }
                      alt={event.eventName}
                      className="w-full object-cover overflow-hidden  rounded-t-lg mb-4"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 uppercase underline">
                    {event.eventName}
                  </h3>
                  <p className="mb-2 font-normal text-gray-400">
                    {event.eventDescription}
                  </p>
                  <p className="text-gray-200">
                    <strong>Date: </strong>
                    <span className="text-red-500">
                      {new Date(event.eventDate).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </span>
                  </p>
                  <p className="text-gray-200">
                    <strong>Venue:</strong> {event.eventVenue}
                  </p>
                  <p className="text-gray-200">
                    <strong>Mode:</strong> {event.eventMode}
                  </p>
                  <button
                    onClick={() => openRegistrationDialog(event.eventName)}
                    className="mt-4 bg-white text-green-500 font-semibold py-2 px-4 rounded hover:bg-gray-200"
                  >
                    Check Registrations
                  </button>
                </div>
              ))
            ) : (
              <p>No upcoming events currently</p>
            )}
          </div>

          <div className="flex ">
            <div className="font-black text-2xl sm:text-4xl">PAST EVENTS</div>
            <div className="flex-auto border-b-4 "></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {pastEvents.length > 0 ? (
              pastEvents.map((event) => (
                <div
                  key={event._id}
                  className="event-card  p-5 w-80 border rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 bg-gradient-to-b from-gray-900 to-gray-700 text-white text-center"
                >
                  <img
                    src={
                      `data:image/png;base64,${event.eventImage}` ||
                      "ccLogo.svg"
                    }
                    alt={event.eventName}
                    className="h-60 w-full object-contain rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 uppercase underline">
                    {event.eventName}
                  </h3>
                  <p className="mb-2 font-normal text-gray-400">
                    {event.eventDescription}
                  </p>
                  <p className="text-gray-200">
                    <strong>Date: </strong>
                    <span className="text-red-500">
                      {new Date(event.eventDate).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </span>
                  </p>
                  <p className="text-gray-200">
                    <strong>Venue:</strong> {event.eventVenue}
                  </p>
                  <p className="text-gray-200">
                    <strong>Mode:</strong> {event.eventMode}
                  </p>
                </div>
              ))
            ) : (
              <p>No past events available</p>
            )}
          </div>
        </div>
      </div>

      <Dialog
        header="Add New Event"
        visible={dialogVisible}
        style={{ width: "90%" }}
        onHide={() => setDialogVisible(false)}
        className="rounded-lg animate__animated animate__fadeInDown"
      >
        <div className="p-fluid flex flex-col gap-4">
          <div>
            <label htmlFor="eventName" className="block mb-2">
              Event Name
            </label>
            <InputText
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Enter event name"
            />
          </div>

          <div>
            <label htmlFor="eventDescription" className="block mb-2">
              Event Description
            </label>
            <InputTextarea
              id="eventDescription"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              placeholder="Enter event description"
              rows={3}
              autoResize
            />
          </div>

          <div>
            <label htmlFor="eventDate" className="block mb-2">
              Date and Time
            </label>
            <Calendar
              id="eventDate"
              value={eventDate}
              onChange={(e) => setEventDate(e.value)}
              showIcon
              showTime
              placeholder="Select date and time"
            />
          </div>

          <div>
            <label htmlFor="eventVenue" className="block mb-2">
              Venue
            </label>
            <InputText
              id="eventVenue"
              value={eventVenue}
              onChange={(e) => setEventVenue(e.target.value)}
              placeholder="Enter venue"
            />
          </div>

          <div>
            <label htmlFor="eventMode" className="block mb-2">
              Mode
            </label>
            <Dropdown
              id="eventMode"
              value={eventMode}
              options={modeOptions}
              onChange={(e) => setEventMode(e.value)}
              placeholder="Select Mode"
            />
          </div>

          <div>
            <label htmlFor="eventImage" className="block mb-2">
              Event Image
            </label>
            <FileUpload
              id="eventImage"
              mode="basic"
              accept="image/*"
              maxFileSize={1000000}
              onSelect={onImageUpload}
              chooseLabel="Choose Image"
            />
          </div>

          <div className="flex justify-center w-full">
          <button
            onClick={handleAddEvent}
            disabled={isSubmitting} 
            className={`mt-5 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
            }`}
          >
            {isSubmitting ? "Saving..." : "Save Event"}
          </button>
          </div>
        </div>
      </Dialog>


      <Dialog
        header="Success!"
        visible={successDialogVisible}
        style={{ width: "50%" }}
        onHide={() => setSuccessDialogVisible(false)}
        className="rounded-lg animate__animated animate__fadeInDown"
      >
        <p className="text-lg text-center">Event added successfully! 🎉</p>
        <div className="flex justify-center">
          <button
            onClick={() => setSuccessDialogVisible(false)}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            OK
          </button>
        </div>
      </Dialog>


      {isRegModal && (
        <EventModal
          registrations={registrations}
          onClose={() => {
            setIsRegModal(false);
            setRegistrations([]);
          }}
          onDownloadClick={downloadExcel}
        />
      )}
    </div>
  );
};

export default AdminEvents;
