function MostraInstrumentos() {
  const [instrumentosPesquisados, setInstrumentosPesquisados] = useState([]);
  const [instrumentos, setInstrumentos] = useState([]);

  useEffect(() => {
    fetchInstrumentos();
  }, []);

  async function fetchInstrumentos() {
    const instrumentosDaAPI = await getInstrumentos();
    setInstrumentos(instrumentosDaAPI);
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Adquira já seu instrumento musical.</Subtitulo>
      <Input
        placeholder="O quê está procurando"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = instrumentos.filter((instrumento) =>
            instrumento.nome.includes(textoDigitado)
          );
          setInstrumentosPesquisados(resultadoPesquisa);
        }}
      />
      {instrumentosPesquisados.map((instrumento) => (
        <Resultado>
          <img src={instrumento.src} />
          <p>{instrumento.nome}</p>
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}
