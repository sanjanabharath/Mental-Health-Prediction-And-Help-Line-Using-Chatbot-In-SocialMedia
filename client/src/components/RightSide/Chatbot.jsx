import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
 
const steps = [
    {
        id: '0',
        message: 'Hi! Hope you are doing good.',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true, 
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'Book Theraphy Session', trigger: '5' },
            { value: 2, label: 'Live Now',  trigger: '13'},
 
        ],
    },{
        id: '5',
        message: " Available Sessions this upcoming week",
        trigger: 6
    },{
        id: '6',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'Monday', trigger: '7'},
            { value: 2, label: 'Wednesday', trigger: '8'}, { value: 3, label: 'Friday', trigger: '9'}
 
        ],
    },{
        id: '7',
        message: "Your session is booked at 12PM on Monday",
        trigger: 10
    },{
        id: '8',
        message: "Your session is booked at 5PM on Wednesday",
        trigger: 10
    },{
        id: '9',
        message: "Your session is booked at 10AM on Friday",
        trigger: 10
    },{
        id: '10',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'Confirm Booking', trigger: '11'},
            { value: 2, label: 'Cancel Booking', trigger: '12'}
 
        ],},{
            id: '11',
            message: "Thank you. Your session is booked. The confirmation mail and link for the meeting will be available in 2mins",
            end: true
        },{
            id: '12',
            message: "Your booking has been cancelled.",
            end: true
        },{
            id: '13',
            message: "How you are feeling?",
            trigger: 14
        },{
            id: '14',
            options: [
                 
                // When we need to show a number of
                // options to choose we create alist
                // like this
                { value: 1, label: 'Depressed', trigger: '15'},
                { value: 2, label: 'Anxious', trigger: '16'}
     
            ],},{
                id: '15',
                message: "Getting enough sleep, eating healthy foods and keeping active can help improve symptoms of depression. If you need more advice or information you can contact our Advice and Information Service.",
                end: true
            },{
                id: '16',
                message: "Try shifting your attention to what is happening around you instead of what is inside your head. ",
                end: true
            }
];
 
// Creating our own theme
const theme = {
    background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};
 
// Set some properties of the bot
const config = {
    // botAvatar: "chatbot.png",
    floating: true,
};
 
function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="NeXmind Bot"
                    
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    );
}
 
export default App;