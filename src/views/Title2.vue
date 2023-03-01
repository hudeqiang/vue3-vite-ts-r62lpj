<template></template>
<script>
import axios from 'axios';
export default {
  async created() {
    let dataArry = [];
    let dataArry1 = [];
    //Promise 优化
    new Promise((resolve, reject) => {
      axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response1) => {
          if (response1.status != 200) {
            console.error(response1);
          } else {
            dataArry.push(response1.data);
            resolve(response1);
          }
        });
    })
      .then((response1) => {
        return new Promise((resolve, reject) => {
          axios
            .get(
              `https://jsonplaceholder.typicode.com/comments?postId=${response1.data.id}`
            )
            .then((response2) => {
              if (response2.status != 200) {
                console.error(response2);
              } else {
                dataArry.push(response2.data);
                resolve(response2);
              }
            });
        });
      })
      .then((response2) => {
        return new Promise((resolve, reject) => {
          axios
            .get(
              `https://jsonplaceholder.typicode.com/users/${response2.data[0].id}`
            )
            .then((response3) => {
              if (response3.status != 200) {
                console.error(response3);
              } else {
                dataArry.push(response3.data);
                resolve(response3);
              }
            });
        });
      })
      .then((response3) => {
        axios
          .get(
            `https://jsonplaceholder.typicode.com/todos?userId=${response3.data.id}`
          )
          .then((response4) => {
            if (response4.status != 200) {
              console.error(response4);
            } else {
              const data1 = dataArry[0];
              const data2 = dataArry[1];
              const data3 = dataArry[2];
              const data4 = response4.data;
              const allData = [data1, data2, data3, data4];
              console.log('allData:', allData);
              localStorage.setItem('allData', JSON.stringify(allData));
            }
          });
      });

    //async/await 优化
    await axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response1) => {
        if (response1.status != 200) {
          console.error(response1);
        } else {
          console.log('1');
          dataArry1.push(response1.data);
          //resolve(response1)
        }
      });
    await axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?postId=${dataArry1[0].id}`
      )
      .then((response2) => {
        if (response2.status != 200) {
          console.error(response2);
        } else {
          console.log('2');
          dataArry1.push(response2.data);
        }
      });
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${dataArry1[1][0].id}`)
      .then((response3) => {
        if (response3.status != 200) {
          console.error(response3);
        } else {
          console.log('3');
          dataArry1.push(response3.data);
        }
      });
    await axios
      .get(
        `https://jsonplaceholder.typicode.com/todos?userId=${dataArry1[2].id}`
      )
      .then((response4) => {
        if (response4.status != 200) {
          console.error(response4);
        } else {
          console.log('4');
          const data1 = dataArry1[0];
          const data2 = dataArry1[1];
          const data3 = dataArry1[2];
          const data4 = response4.data;
          const allData = [data1, data2, data3, data4];
          console.log('async/awit=allData2:', allData);
          localStorage.setItem('async/awit=allData2', JSON.stringify(allData));
        }
      });
    console.log('等待完成');
  },
};
</script>
