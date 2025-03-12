* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style-type: none;
}

header {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 50px;
  background-color: black;
  border: 1px solid black;
  padding-left: 80px;
  color: #b1afaf;
  font-size: 10px;
  font-weight: 100;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.list {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 100%;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 100;
}

.input {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.input input {
  border: 1px solid rgb(216, 216, 216);

  border-radius: 5px;
  padding: 10px;
  width: 600px;
  margin-right: 50px;
  margin-left: 50px;
}

.input button {
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 50px;
  background-color: rgb(3, 150, 248);
  margin-right: 50px;
  color: #fff;
  cursor: pointer;
}

.input button:hover {
  background-color: rgb(6, 111, 197);
  cursor: pointer;
}

.tasks {
  width: 100%;
  margin-top: 50px;
  border-radius: 5px;
  border: 1px solid rgb(216, 216, 216);
  border-bottom: none;
  box-shadow: none;
}

.tasks ul li {
  padding: 20px 20px;
  width: 100%;
  border-bottom: 1px solid rgb(216, 216, 216);
}

.task-left {
  display: flex;
  align-items: center;
}

.task-left .checkbox input {
  margin-right: 10px;
  cursor: pointer;
}

.task img {
  cursor: pointer;
}
.task {
  display: flex;

  justify-content: space-between;
  align-items: center;
}

.litter {
  width: 20px;
  height: 20px;
}
