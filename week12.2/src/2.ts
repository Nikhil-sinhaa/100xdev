type EventType = 'click'|'scroll'|'mousemove';
type excludeevent= Exclude<EventType,'scroll'>;
const handleEvent = (event:excludeevent) =>{
    console.log(`Handling Event: $(event)`);
}