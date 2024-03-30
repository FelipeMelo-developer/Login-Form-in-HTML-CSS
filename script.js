
        const bairrosPorEstado = {
            "AC": ["Bairro 1", "Bairro 2", "Bairro 3"],
            "AL": ["Bairro A", "Bairro B", "Bairro C"],
            // Mapear bairros para outros estados aqui
        };

        function carregarBairros(estadoSelecionado) {
            const selectBairro = document.getElementById("bairro");
            selectBairro.innerHTML = ""; // Limpa as opções existentes

            if (estadoSelecionado in bairrosPorEstado) {
                const bairros = bairrosPorEstado[estadoSelecionado];
                bairros.forEach(bairro => {
                    const option = document.createElement("option");
                    option.text = bairro;
                    option.value = bairro;
                    selectBairro.add(option);
                });
            } else {
                const option = document.createElement("option");
                option.text = "Selecione um estado primeiro";
                selectBairro.add(option);
            }
        }
