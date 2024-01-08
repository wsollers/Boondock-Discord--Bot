import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("severnWeather")
  .setDescription("Replies with current NOAA weather in Severn, MD");

/*
Severn lat/long 39.1371N, 76.6983W
https://api.weather.gov/gridpoints/{office}/{gridX},{gridY}/forecast
https://api.weather.gov/points/39.1371,-76.6983
cwa	"LWX"
forecastOffice	"https://api.weather.gov/offices/LWX"
gridId	"LWX"
gridX	107
gridY	84
forecast	"https://api.weather.gov/gridpoints/LWX/107,84/forecast"
forecastHourly	"https://api.weather.gov/gridpoints/LWX/107,84/forecast/hourly"
forecastGridData	"https://api.weather.gov/gridpoints/LWX/107,84"
observationStations	"https://api.weather.gov/gridpoints/LWX/107,84/stations"
*/
export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Pong!");
}

