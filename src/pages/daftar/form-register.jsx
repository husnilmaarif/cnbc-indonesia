// IMPORT
import React from "react";
import ShowErrors from "./error";

// INPUT
const Input = ({ label, type, name, placeholder, onChange }) => {
  return (
    <div>
      <label>{label}:</label>
      <br />
      <input type={type} name={name} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
      <br />
    </div>
  );
};

export default class Daftar extends React.Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    errors: [],
  };

  // HANDLE SUBMIT
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, username, email, password } = this.state;
    let massage = [];

    // VALIDATION NAME
    if (name.length === 0) {
      massage = [...massage, "Nama tidak boleh kosong"];
    }

    // VALIDATION USERNAME
    if (username.length === 0) {
      massage = [...massage, "Nama pengguna tidak boleh kosong"];
    }

    // VALIDATION EMAIL
    if (email.length === 0) {
      massage = [...massage, "Email tidak boleh kosong"];
    }

    // VALIDATION PASSWORD
    if (password.length === 0) {
      massage = [...massage, "Password tidak boleh kosong"];
    } else if (password.length < 8) {
      massage = [...massage, "Password terlalu pendek Minimal 8 karakter"];
    }

    // ERROR & SUCCEED
    if (massage.length > 0) {
      this.setState({
        errors: massage,
      });
    } else {
      alert(`
      Name : ${this.state.name},
      Username : ${this.state.username}
      Email : ${this.state.email},
      Password : ${this.state.password}
      `);
      this.setState({
        errors: [],
      });
    }
  };

  render() {
    // STYLE
    const style = {
      width: "400px",
      margin: "100px auto",
      padding: "20px",
      border: "solid black",
      backgroundColor: "skyblue",
    };

    // CONTENTS
    return (
      <div style={style}>
        <h2>Halaman Registrasi</h2>
        <form onSubmit={this.handleSubmit}>
          <Input type="text" name="name" label="Nama" placeholder="Husnil" onChange={(value) => this.setState({ name: value })} />
          <Input type="username" name="username" label="Nama Pengguna" placeholder="Maarif" onChange={(value) => this.setState({ username: value })} />
          <Input type="email" name="email" label="Email" placeholder="contoh@gmail.com" onChange={(value) => this.setState({ email: value })} />
          <Input type="password" name="password" label="Kata Sandi" placeholder="********" onChange={(value) => this.setState({ password: value })} />
          <br />
          <button type="submit">Daftar</button>
        </form>
        {this.state.errors && <ShowErrors errors={this.state.errors} />}
      </div>
    );
  }
}
