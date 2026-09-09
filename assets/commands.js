export const categories = [
 ['sistema','Sistema','▦'],['arquivos','Arquivos','▱'],['rede','Rede','◎'],['ssh','SSH','⌁'],['docker','Docker','▤'],['firewall','Firewall','◇'],['discos','Discos','◴'],['processos','Processos','≋'],['diagnostico','Diagnóstico','⊕']
];
// Conteúdo estático: nenhum comando é executado pelo site.
const rows = [
 ['ls','arquivos','Lista arquivos e diretórios. Veja o que existe em uma pasta, incluindo permissões e tamanhos.','ls [opções] [diretório]','ls -lah',null,'-l: lista detalhada · -a: inclui ocultos · -h: tamanhos legíveis'],
 ['cd','arquivos','Navegue entre diretórios pelo terminal.','cd [diretório]','cd /var/log',null,'Use cd .. para voltar ao diretório pai e cd ~ para ir à sua pasta pessoal.'],
 ['pwd','arquivos','Mostra o caminho completo do diretório atual.','pwd [opções]','pwd',null,'Útil para conferir onde você está antes de alterar arquivos.'],
 ['cp','arquivos','Copia arquivos ou diretórios para outro local.','cp [opções] origem destino','cp -i relatorio.txt backup.txt','Pode sobrescrever o destino. A opção -i solicita confirmação.','Para copiar diretórios, use -r.'],
 ['mv','arquivos','Move ou renomeia arquivos e diretórios.','mv [opções] origem destino','mv -i rascunho.txt notas.txt','Pode sobrescrever arquivos no destino. Confira os caminhos.','A opção -i pede confirmação antes de sobrescrever.'],
 ['rm','arquivos','Remove arquivos do sistema de arquivos.','rm [opções] arquivo','rm -i arquivo-temporario.txt','A exclusão não passa pela lixeira. Verifique o caminho e evite usar -rf sem entender o impacto.','O exemplo pede confirmação antes de excluir.'],
 ['mkdir','arquivos','Cria um diretório ou uma estrutura de pastas.','mkdir [opções] diretório','mkdir -p projetos/linux',null,'-p cria também os diretórios pais necessários.'],
 ['find','arquivos','Encontra arquivos por nome, tipo e outros critérios.','find [caminho] [expressão]','find . -type f -name "*.log"',null,'O ponto inicia a busca no diretório atual. Aspas impedem a expansão do padrão pelo shell.'],
 ['grep','arquivos','Busca padrões de texto dentro de arquivos.','grep [opções] padrão arquivo','grep -n "erro" aplicativo.log',null,'-n mostra o número da linha. Use -i para ignorar maiúsculas e minúsculas.'],
 ['uname','sistema','Exibe informações do kernel e da arquitetura do sistema.','uname [opções]','uname -a',null,'-a reúne as informações disponíveis; -r mostra a versão do kernel.'],
 ['uptime','sistema','Mostra há quanto tempo o sistema está ligado e sua carga média.','uptime [opções]','uptime',null,'As médias de carga correspondem aos últimos 1, 5 e 15 minutos.'],
 ['free','sistema','Consulta o uso de memória RAM e swap.','free [opções]','free -h',null,'Observe a coluna available para estimar a memória disponível para novos programas.'],
 ['systemctl','sistema','Consulta e gerencia serviços em sistemas com systemd.','systemctl [ação] [serviço]','systemctl status ssh','Ações como stop, disable e restart podem interromper serviços.','O exemplo apenas consulta. O serviço pode se chamar sshd em algumas distribuições.'],
 ['whoami','sistema','Exibe o nome do usuário efetivo da sessão atual.','whoami','whoami',null,'Ajuda a conferir com qual usuário o terminal está operando.'],
 ['ip','rede','Consulta interfaces, endereços e rotas de rede.','ip [opções] objeto ação','ip -brief address',null,'O exemplo apenas consulta. Alterações de endereço ou rota podem interromper a conexão.'],
 ['ping','rede','Testa a resposta de um destino usando mensagens ICMP.','ping [opções] destino','ping -c 4 example.com',null,'-c 4 limita o teste a quatro pacotes. Alguns destinos bloqueiam ICMP.'],
 ['ss','rede','Exibe sockets, conexões e portas em escuta.','ss [opções]','ss -tuln',null,'-t: TCP · -u: UDP · -l: em escuta · -n: endereços numéricos'],
 ['curl','rede','Faz requisições HTTP e consulta respostas de servidores.','curl [opções] URL','curl -I https://example.com',null,'-I consulta os cabeçalhos. Evite executar scripts baixados sem inspecioná-los.'],
 ['ssh','ssh','Abre uma sessão segura em outro computador quando executado no seu terminal.','ssh [opções] usuário@host','ssh usuario@192.0.2.10','Confira a identidade e a impressão digital do servidor antes de confiar na conexão.','Endereço ilustrativo. Este site não conecta a servidores nem recebe credenciais.'],
 ['scp','ssh','Copia arquivos entre computadores por uma conexão segura.','scp [opções] origem destino','scp relatorio.txt usuario@192.0.2.10:/home/usuario/','Pode sobrescrever arquivos no destino. Confira o host e o caminho.','Execute apenas no seu terminal, substituindo os valores ilustrativos.'],
 ['ssh-keygen','ssh','Gera e gerencia chaves para autenticação SSH.','ssh-keygen [opções]','ssh-keygen -t ed25519 -C "meu-computador"','Não sobrescreva uma chave existente sem backup. Nunca compartilhe a chave privada.','Use uma frase secreta. Compartilhe somente a chave pública, com extensão .pub.'],
 ['docker ps','docker','Lista os contêineres Docker em execução.','docker ps [opções]','docker ps -a',null,'-a inclui contêineres parados. Requer Docker instalado e acesso ao daemon.'],
 ['docker logs','docker','Consulta a saída de um contêiner.','docker logs [opções] contêiner','docker logs --tail 50 meu-container',null,'--tail limita a saída. Use -f para acompanhar os próximos registros.'],
 ['docker stop','docker','Solicita a parada de um contêiner em execução.','docker stop [opções] contêiner','docker stop meu-container','Interrompe a aplicação do contêiner. Confira dependências e usuários ativos.','A parada envia um sinal de término e pode forçar o encerramento após o tempo limite.'],
 ['ufw status','firewall','Consulta as regras e o estado do firewall UFW.','sudo ufw status [verbose]','sudo ufw status verbose',null,'Disponível em sistemas com UFW instalado. O exemplo não modifica regras.'],
 ['ufw allow','firewall','Adiciona uma regra permitindo tráfego no firewall UFW.','sudo ufw allow porta/protocolo','sudo ufw allow 22/tcp','Abre uma porta de rede. Avalie a exposição e restrinja a origem quando possível.','A porta 22 é usada normalmente pelo SSH. A regra só atua quando o UFW está ativo.'],
 ['df','discos','Mostra o espaço usado e disponível nos sistemas de arquivos montados.','df [opções] [caminho]','df -h',null,'-h usa unidades legíveis. Use df -i para consultar o uso de inodes.'],
 ['du','discos','Calcula quanto espaço arquivos e diretórios ocupam.','du [opções] [caminho]','du -sh ~/Downloads',null,'-s mostra um total; -h utiliza unidades legíveis.'],
 ['lsblk','discos','Lista dispositivos de bloco, partições e pontos de montagem.','lsblk [opções]','lsblk -f',null,'-f inclui o tipo do sistema de arquivos, rótulos e UUIDs.'],
 ['ps','processos','Consulta os processos em execução.','ps [opções]','ps aux',null,'Exibe processos de todos os usuários, incluindo consumo de CPU e memória.'],
 ['top','processos','Acompanha processos e uso de recursos em tempo real.','top [opções]','top',null,'Pressione q para sair. A visualização atualiza periodicamente.'],
 ['kill','processos','Envia um sinal a um processo pelo seu identificador.','kill [opções] PID','kill -TERM 1234','Pode interromper trabalho em andamento. Confira o PID com ps antes de enviar o sinal.','1234 é ilustrativo. Prefira TERM para permitir encerramento; KILL impede a limpeza normal.'],
 ['journalctl','diagnostico','Consulta os registros do sistema em distribuições com systemd.','journalctl [opções]','journalctl -p err -b',null,'Filtra erros da inicialização atual. O acesso a alguns registros depende de permissões.'],
 ['dmesg','diagnostico','Exibe mensagens do kernel para investigar hardware e inicialização.','dmesg [opções]','sudo dmesg --level=err,warn',null,'O exemplo consulta erros e avisos. Algumas distribuições restringem a leitura.'],
 ['lscpu','diagnostico','Exibe informações sobre processadores e arquitetura.','lscpu [opções]','lscpu',null,'Mostra CPUs lógicas, núcleos, arquitetura e recursos disponíveis.'],
 ['type','diagnostico','Identifica se um comando é um executável, alias ou recurso do shell.','type [opções] comando','type -a ls',null,'Em Bash, -a mostra todas as definições encontradas para o nome.']
];
export const commands = rows.map(([name,category,description,syntax,example,warning,note]) => ({name,category,description,syntax,example,warning,note,slug:name.replaceAll(' ','-')}));
