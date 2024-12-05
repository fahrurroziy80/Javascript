nilai_mahasiswa = [
    {
        nama: "siti",
        mk: [
            { nama: "agama", nilai: { harian: 80, uts: 60, uas: 70 } },
            { nama: "pemrograman", nilai: { harian: 10, uts: 80, uas: 70 } },
            { nama: "pancasila", nilai: { harian: 10, uts: 60, uas: 70 } }
        ]
    },
    {
        nama: "ali",
        mk: [
            { nama: "agama", nilai: { harian: 90, uts: 50, uas: 20 } },
            { nama: "pemrograman", nilai: { harian: 80, uts: 80, uas: 100 } },
            { nama: "pancasila", nilai: { harian: 60, uts: 90, uas: 80 } }
        ]
    },
    {
        nama: "budi",
        mk: [
            { nama: "agama", nilai: { harian: 100, uts: 80, uas: 70 } },
            { nama: "pemrograman", nilai: { harian: 100, uts: 80, uas: 90 } },
            { nama: "pancasila", nilai: { harian: 100, uts: 70, uas: 80 } }
        ]
    }
]

document.write("<table border='1'>")
document.write("<tr>")
document.write("<td>Nama</td>")
document.write("<td>MK</td>")
document.write("<td>Harian</td>")
document.write("<td>UTS</td>")
document.write("<td>UAS</td>")
document.write("<td>Nilai Akhir</td>")
document.write("<td>Grade</td>")
document.write("</tr>")

for (i in nilai_mahasiswa) {
    mk = nilai_mahasiswa[i].mk
    for (j in mk) {
        document.write("<tr>")
        if(j==0){
            document.write("<td rowspan=3>"+nilai_mahasiswa[i].nama+"</td>")
        }
        document.write("<td>"+mk[j].nama +"</td>")
        document.write("<td>"+mk[j].nilai.harian +"</td>")
        document.write("<td>"+mk[j].nilai.uts +"</td>")
        document.write("<td>"+mk[j].nilai.uas +"</td>")
        
        harian = mk[j].nilai.harian * 0.2;
        uts = mk[j].nilai.uts * 0.3;
        uas = mk[j].nilai.uas * 0.5;
        na = harian + uts + uas
        document.write("<td>"+na +"</td>")
        grade = "E"
        if (na >= 80) {
            grade = "A"
        } else if (na >= 75) {
            grade = "B+"
        } else if (na >= 70) {
            grade = "B"
        } else if (na >= 60) {
            grade = "C+"
        } else if (na >= 50) {
            grade = "C"
        } else if (na >= 30) {
            grade = "D"
        }
        document.write("<td>"+grade +"</td>")
        document.write("</tr>")
    }
}

document.write("</table>")