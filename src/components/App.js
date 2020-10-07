import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends Component {
  state = { images: [] };

  /**
   * Ovo je metod koji se predaje child komponenti tj. formi,
   * tako da se na submit forme zapravo izvrsava ovaj metod.
   * U samom metodu dovlacimo podatke, a zatim ih smestamo u niz,
   * koji predstvalja stanje same komponente.s
   */
  onSearchSubmit = async term => {
    const response = await unsplash.get("search/photos", {
      params: { query: term }
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
