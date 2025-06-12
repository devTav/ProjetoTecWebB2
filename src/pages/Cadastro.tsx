import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppContext } from '../contexts/AppContext';
import './Cadastro.css';

const schema = yup.object().shape({
  nome: yup.string().required('O nome é obrigatório').min(3, 'Mínimo 3 caracteres'),
  descricao: yup.string().required('A descrição é obrigatória'),
  categoria: yup.string().required(),
});

type FormData = {
  nome: string;
  descricao: string;
  categoria: string;
};

export function Cadastro() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const { adicionarItem } = useAppContext();

  function onSubmit(data: FormData) {
    adicionarItem(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="campo-form">
        <label>Nome:</label>
        <input {...register('nome')} />
        <span className="mensagem-erro">{errors.nome?.message}</span>
      </div>

      <div className="campo-form">
        <label>Descrição:</label>
        <textarea {...register('descricao')} />
        <span className="mensagem-erro">{errors.descricao?.message}</span>
      </div>

      <div className="campo-form">
        <label>Categoria:</label>
        <select {...register('categoria')}>
          <option value="">Selecione</option>
          <option value="pessoal">Pessoal</option>
          <option value="trabalho">Trabalho</option>
          <option value="estudos">Estudos</option>
        </select>
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
}
