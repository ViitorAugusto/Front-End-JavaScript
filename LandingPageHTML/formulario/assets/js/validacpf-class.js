// 705.484.450-52  070.9879.720-03
class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            configurable: false,
            writable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, ''),
        });
    }
    esequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    gerarNovoCpf() {
        const cpfSemDigito = this.cpfLimpo.slice(0, -2);
        const digito1 = this.gerarDigito(cpfSemDigito);
        const digito2 = this.gerarDigito(cpfSemDigito + digito1);
        this.novoCPF = cpfSemDigito + digito1 + digito2;

    }

    gerarDigito(cpfSemDigito) {
        let total = 0;
        let reverso = cpfSemDigito.length + 1;
        for (let stringNumerica of cpfSemDigito) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : `0`;
    }


        valida() {
            if (!this.cpfLimpo) return false;
            if (typeof this.cpfLimpo !== 'string') return false;
            if (this.cpfLimpo.length !== 11) return false;
            if (this.esequencia()) return false;
            this.gerarNovoCpf()
            return this.novoCPF === this.cpfLimpo;

        }
    
}
