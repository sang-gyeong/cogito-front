export const eventSource = new EventSource('//dev.cogito.shop/api/notifications/subscribe', {
  withCredentials: true,
});

if (typeof EventSource !== 'undefined') {
  // connection 되면
  eventSource.onopen = event => {
    // Connection was opened.
  };

  eventSource.onmessage = event => {
    console.log('New Message : ', event.data);
  };

  // error 나면
  eventSource.onerror = event => {
    console.log('Error : ', event);
  };
} else {
  alert('EventSource 객체를 지원하지 않는 브라우저 입니다.');
}
