import Main from '../main';

interface PropsApp {
  data: {
    title: string;
    genre: string;
    releaseDate: number;
  };
}

function App({ data }: PropsApp): JSX.Element {
  return (
    <Main
      data={data}
    />
  );
}

export default App;
