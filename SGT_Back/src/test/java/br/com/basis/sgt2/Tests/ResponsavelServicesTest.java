package br.com.basis.sgt2.Tests;


import br.com.basis.sgt2.Service.DTO.ResponsavelDTO;
import br.com.basis.sgt2.Service.ResponsavelServices;
import br.com.basis.sgt2.Service.TarefaServices;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.List;

@SpringBootTest
@Transactional
public class ResponsavelServicesTest {

    @Autowired
    private ResponsavelServices responsavelServices;


    private long idExistente;
    private long idInexistente;
    private int quantidadeResponsavel;

    @BeforeEach
    void setDados() throws Exception{
        idExistente = 1L;
        idInexistente = 999L;
        quantidadeResponsavel = 3;

    }

    @Test
    public void obterTodosResponsaveisDeveriaRetornarResponsaveis(){
        List<ResponsavelDTO> lista = responsavelServices.obterTodos();

        Assertions.assertFalse(lista.isEmpty());
        Assertions.assertEquals(lista.size(),quantidadeResponsavel);

    }

    @Test
    public void obterResponsavelPorId(){
        ResponsavelDTO responsavelDTO = responsavelServices.obterPorId(idExistente);
        Assertions.assertNotNull(responsavelDTO);

    }
    @Test
    public void obterResponsavelPorIdDeveriaRetornarNullQuandoInexistente(){
        ResponsavelDTO responsavelDTO = responsavelServices.obterPorId(idInexistente);
        Assertions.assertNull(responsavelDTO);

    }
    @Test
    public void SalvarResponsavelDeveriaSalvarUmNovoResponsavel(){
        ResponsavelDTO responsavelDTO = getResponsavelDTO();
        responsavelDTO.setId(null);
        responsavelDTO = responsavelServices.salvar(responsavelDTO);
        ResponsavelDTO responsavelSalvar = responsavelServices.obterPorId(responsavelDTO.getId());

        Assertions.assertNotNull(responsavelSalvar.getId());

    }
    @Test
    public void AtualizarResponsavelPorId(){
        ResponsavelDTO responsavelDTO = getResponsavelDTO();
        responsavelDTO.setId(idExistente);
        responsavelDTO = responsavelServices.atualizar(responsavelDTO);
        ResponsavelDTO reslponsavelAtualizar = responsavelServices.obterPorId(responsavelDTO.getId());

        Assertions.assertNotNull(reslponsavelAtualizar.getId());


    }

    @Test
    public void deletarTarefa(){
        Assertions.assertDoesNotThrow(() ->
        { responsavelServices.obterPorId(idExistente);
        });
    }


    private ResponsavelDTO getResponsavelDTO(){
        ResponsavelDTO responsavelDTO = new ResponsavelDTO();
        responsavelDTO.setId(99889L);
        responsavelDTO.setNome("Adr");
        return responsavelDTO;

    }

}
