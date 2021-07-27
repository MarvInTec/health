import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import Info from "./Info";

export default function ContentImc() {

    const [dados, setDados] = useState({
        altura: 0,
        peso: 0,
    })

    const [calculo, setCalculo] = useState({
        resultado: '',
    });

    const handleInputChange = (parametro, value) => {
        setDados({
            ...dados, [parametro]: value
        })
    }

    const health = () => {

        let calcImc = (dados.peso / (dados.altura * dados.altura)).toFixed(2)

        if (calcImc < 17) {
            setCalculo({
                ...calculo, resultado: `${calcImc}   Você está anorexo, sumiu!!!!.`
            })
        }
        else if (calcImc >= 17 && calcImc <= 18.4) {
            setCalculo({
                ...calculo, resultado: `${calcImc}   Você está abaixo do peso, pode sentir fadiga, stress e ansiedade.`
            })

        } else if (calcImc >= 18.5 && calcImc <= 24.9) {
            setCalculo({
                ...calculo, resultado: `${calcImc} Você está no peso ideal, tem menores chances de ter problemas cardío-vasculares.`
            })
        } else if (calcImc >= 25 && calcImc <= 29.9) {
            setCalculo({
                ...calculo, resultado: `${calcImc} Você está acima do peso ideal, maior probalidade de má circulação, varizes e infarto.`
            })
        }
        else if (calcImc > 30) {
            setCalculo({
                ...calculo, resultado: `${calcImc} Você está Obeso, para com a Picanha nos fds!!!!.`
            })
        }
    }

    return (
        <ScrollView>
            {/*AQUI COMEÇA CÁLCULO IMC  */}
            <View style={styles.conteudo}>
                <View>

                    <TextInput style={styles.botao} placeholder="Digite seu peso, ex: 60.5"
                        keyboardType='numeric'
                        onChangeText={(entrada) => handleInputChange("peso", entrada)
                        } />

                    <TextInput style={styles.botao} placeholder="Digite sua altura, ex: 1.60"
                        keyboardType='numeric'
                        onChangeText={(entrada) => handleInputChange("altura", entrada)
                        } />

                    <TouchableOpacity onPress={health}>
                        <Text style={styles.botao}>Resultado</Text>
                        <Text style={styles.botao}>O resultado do IMC é: {calculo.resultado}</Text>
                    </TouchableOpacity>

                </View>



            </View>

            {/* AQUI TERMINA O CÁLCULO IMC */}

            {/* AQUI COMEÇA AS INFORMAÇÕES */}

            <View>
                <Info titulo={`Cuide da sua Saúde\n`} autor='Stravius' conteudo={`\n Não fique anorexo, senão não vão te ver...`} />
            </View>
            <View>
                <Info titulo={`Cuide da sua Saúde\n`} autor='Stravius' conteudo={`\n Não fique anorexo, senão não vão te ver...`} />
            </View>
            <View>
                <Info titulo={`Cuide da sua Saúde\n`} autor='Stravius' conteudo={`\n Não fique anorexo, senão não vão te ver...`} />
            </View>
            <View>
                <Info titulo={`Cuide da sua Saúde\n`} autor='Stravius' conteudo={`\n Não fique anorexo, senão não vão te ver...`} />
            </View>
            <View>
                <Info titulo={`Cuide da sua Saúde\n`} autor='Stravius' conteudo={`\n Não fique anorexo, senão não vão te ver...`} />
            </View>
            <View>
                <Info titulo={`Cuide da sua Saúde\n`} autor='Stravius' conteudo={`\n Não fique anorexo, senão não vão te ver...`} />
            </View>
            <View>
                <Info titulo={`Cuide da sua Saúde\n`} autor='Stravius' conteudo={`\n Não fique anorexo, senão não vão te ver...`} />
            </View>
            <View>
                <Info titulo={`Cuide da sua Saúde\n`} autor='Stravius' conteudo={`\n Não fique anorexo, senão não vão te ver...`} />
            </View>
            
            {/* AQUI TERMINA AS INFORMAÇÕES */}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: '#CDAA7D',
        alignItems: 'center',
        justifyContent: 'center'
    },

    botao: {
        color: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        fontSize: 30,
        fontWeight: 'bold'
    },
});